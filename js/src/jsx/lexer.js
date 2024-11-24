(function()
{    
    /**
     * Utility Regexes.
     * 
     * @var {Regexp}
     */
    const SPACE = /[\t\r\n\f ]/;
    const ALPHA = /[A-z]/;
    const ALPHA_DASH = /[A-z-]/;
    const QUOTES = ['"', '\'', '`'];

    /**
     * Void tags.
     * 
     * @var {Array}
     */
    const VOID_ELS =
    [
        'area',
        'base',
        'br',
        'circle',
        'col',
        'ellipse',
        'embed',
        'hr',
        'img',
        'input',
        'line',
        'link',
        'meta',
        'param',
        'polygon',
        'polyline',
        'rect',
        'source',
        'track',
        'use',
        'wbr',
        'doctype',
    ];

    /**
     * Lexer.
     * 
     * @param {String}   html
     * @param {Function} emit
     */
    const Lexer = function(html, emit)
    {
        this.html = html;
        this.emit = emit;
        this.currentTag  = null;
        this.pos         = 0;
        this.braceDepth  = 0;
        this.attrValStack = [];
    }

    /**
     * Parse and emit.
     * 
     * @access {public}
     */
    Lexer.prototype.parse = function()
    {
        let scan = 'text';

        while (scan = this[scan](this.peek()));

        if (this.html === '')
        {
            scan = null;

            this.complete();
        }
    }

    /**
     * next.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.next = function()
    {
        return this.html.charAt(this.pos++);
    }

    /**
     * peek next.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.peek = function()
    {
        return this.html.charAt(this.pos);
    }

    /**
     * peek next.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.peekback = function()
    {
        return this.html.charAt(this.pos -1);
    }

    /**
     * peek n chars.
     * 
     * @access {private}
     * @param  {Integer} n
     * @return {String}
     */
    Lexer.prototype.peekn = function(n)
    {            
        return this.html.slice(this.pos, this.pos + n);
    }

    /**
     * Chunk position buffer.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.chunk = function()
    {
        let buff = this.html.slice(0, this.pos);
        
        this.consume(this.pos);

        return buff;
    }

    /**
     * consume n chars.
     * 
     * @access {private}
     * @param  {Integer} n
     */
    Lexer.prototype.consume = function(n)
    {
        this.html = this.html.substr(n);

        this.pos  = 0;
    }

    /**
     * consume whitespace.
     * 
     * @access {private}
     */
    Lexer.prototype.whitespace = function()
    {
        while (SPACE.test(this.peek()) && this.next());

        this.consume(this.pos);
    }

    /**
     * Scan until chars
     * 
     * @access {private}
     * @return {Boolean}
     */
    Lexer.prototype.scan = function(chars)
    {
        let len = chars.length;

        while (this.peekn(len) !== chars)
        {
            if (!this.next()) break;
        }

        return this.html.slice(0, this.pos);
    }

    /**
     * JSX spread attribute.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.bufferjsx = function()
    {
        let braceDepth = 0;

        // Collect the intial spread
        let jsx = this.buffer((char) =>
        {
            if (char === '{')
            {
                braceDepth++;
            }
            else if (char === '}')
            {
                braceDepth--;
            }

            if (braceDepth === 0) return true;
        });

        if (braceDepth > 0) throw new Error('Unclosed JSX bracket found');

        this.next();

        return this.chunk();
    }

    /**
     * Buffer until callback on each char
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.buffer = function(validator)
    {
        let buff = '';

        while (!validator(this.peek(), buff))
        {
            let n = this.peek();

            if (n === '') break;

            buff += n;

            this.next();
        }
        
        return buff;
    }

    /**
     * Complete.
     * 
     */
    Lexer.prototype.complete = function()
    {
        this.emit('complete');
    }

    /**
     * Text default state.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.text = function()
    {
        if ('>' == this.peek()) this.consume(1);
        
        let next = false;

        let buff = this.buffer((char) => 
        { 
            // JSX Func was left open
            if (
                    (
                        this.braceDepth > 0 && (char !== '>' && char !== '<') 
                    ) 
                    ||
                    (
                        this.peekback() !== '\\' && (char === '{' || char === '}')
                    )
                )
            {
                next = 'jsx_block';

                return true;
            }

            if (char === '<' && !SPACE.test(this.peek()))
            {
                next = 'tag_open';

                return true;
            }
        });

        if (buff && buff !== '<')
        {
            this.consume(buff.length);

            this.emit('text', buff);
        }

        if (next === 'tag_open') this.consume(1);

        return next;
    }

    /**
     * Tag open.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.tag_open = function(char)
    {                
        // Markup declaration
        if (char === '!')
        {
            this.consume(1);

            return 'markup_declaration_open';
        }

        // Bogus tag
        if (char === '?')
        {
            this.consume(1);

            return 'bogus_tag';
        }

        // Close
        if (char === '/')
        {
            this.consume(1);

            return 'tag_close';
        }

        let tag = this.buffer(char => SPACE.test(char) || char === '>');

        if (tag.length === 0) throw new Error('Empty tag name.');

        this.consume(tag.length);

        this.currentTag = tag;

        this.emit('tag:open', tag);

        return 'attr_key';
    }

    /**
     * Tag close self close. Reached after "/" in a tag.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.tag_close_self = function()
    {
        // Consume any whitespace
        this.whitespace();

        // Emit and close the tag.
        if ('>' === this.peek())
        {
            this.currentTag = null;

            this.emit('tag:close:self', '');

            return 'text';
        }

        // Fallback to error.
        throw new Error('Invalid self closing tag.');
    }

    /**
     * Tag close self close. Reached after ">" in void tag.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.tag_close_void = function()
    {
        this.consume(1);

        this.currentTag = null;

        this.emit('tag:close:void');

        return 'text';
    }

    /**
     * Tag close.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.tag_close = function()
    {
        let tag = this.buffer(char => char === '>');
        
        this.consume(tag.length);
        
        this.emit('tag:close', tag);

        this.currentTag = null;
        
        return 'text';
    }

    /**
     * Attribute key.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.attr_key = function()
    {
        this.whitespace();

        if ('>' === this.peek())
        {
            if (this.currentTag && VOID_ELS.includes(this.currentTag)) return 'tag_close_void';

            this.consume(1);

            return 'text';
        }

        if ('/' === this.peek())
        {
            this.consume(1);

            return 'tag_close_self';
        }

        if ('{' === this.peek()) return 'attr_jsx_spread';
        
        let attr = this.buffer(char => SPACE.test(char) || char === '=' || char === '>');

        this.consume(attr.length);
        
        if (attr) this.emit('attr:key', attr);

        let peek = this.peek();

        if (peek === '=')
        {
            this.consume(1);

            return 'attr_val';
        }

        if (peek === '>')
        {
            if (this.currentTag && VOID_ELS.includes(this.currentTag)) return 'tag_close_void';

            this.consume(1);

            return 'text';
        }

        if (SPACE.test(peek))
        {
            this.consume(1);
            
            return 'attr_key';
        }
    }

    /**
     * Attribute value.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.attr_val = function()
    {
        // Clear out whitespace
        this.whitespace();

        if (this.peek() === '{') return 'attr_val_jsx';

        let end;

        if ('"' == this.peek()) end = '"';
        
        if ('\'' == this.peek()) end = '\'';

        if (!end) throw new Error('Unquoted attribute value.');

        // Remove starting quote
        this.consume(1);

        // Cache end marker
        this.attrValEnd = end;

        // Buffer untill closed or jsx is found
        let buff = this.buffer(char => this.peekback() !== '\\' && (char === '{' || char === end ));

        // JSX was found
        if (this.peek() === '{')
        {
            this.consume(buff.length);

            this.attrValStack.push(buff);
            
            return 'attr_val_interpolated';
        }
        
        // Remove end quote plus value
        this.consume(buff.length + 1);

        this.emit('attr:val', buff);

        // Stop
        if (this.html === '') throw new Error('Unclosed attribute value.');

        return 'attr_key';
    }

    /**
     * When reached an opening jsx bracket "{" inside a quoted attribute value.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.attr_val_interpolated = function()
    {
        // Buffer untill closed or jsx is found
        this.buffer(char => this.peekback() !== '\\' && char === '}');

        // Add closing bracket
        this.next();

        // Consume buff
        let jsx = this.chunk();
        
        // Push attr to stack
        this.attrValStack.push(`\$${jsx}`);

        // Buffer to an opening jsx bracket or end of attribute vlaue
        let buff = this.buffer(char => this.peekback() !== '\\' && (char === '{' || char === this.attrValEnd ));

        // JSX was found
        if (this.peek() === '{')
        {
            this.consume(buff.length);

            this.attrValStack.push(buff);
            
            return 'attr_val_interpolated';
        }

        // Consume buff plus ending quote marker
        this.consume(buff.length + 1);

        // Don't empty quotes
        if (buff.length >= 1) this.attrValStack.push(buff);

        this.emit('attr:val:interpolated', this.attrValStack.join(''));

        this.attrValStack = [];

        return 'attr_key';
    }

    /**
     * JSX atribute value.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.attr_val_jsx = function()
    {
        this.emit('attr:val:jsx', this.bufferjsx().trim());

        return 'attr_key';
    }

    /**
     * JSX spread attribute.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.attr_jsx_spread = function()
    {
        this.emit('attr:jsx:spread', this.bufferjsx().trim());

        return 'attr_key';
    }

    /**
     * Bogus tag.
     * 
     * @access {private}
     * @throws
     */
    Lexer.prototype.bogus_tag = function()
    {
        this.html = '';

        throw new Error('Invalid [<?] tag in html.');
    }

    /**
     * Comment open, cdata open or doctype declartion.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.markup_declaration_open = function()
    {
        let char = this.peek();

        if (this.peekn(2) === '--')
        {
            this.consume(2);

            return 'comment_start';
        }

        if (this.peek() === '[')
        {
            this.consume(1);

            return 'cdata_start';
        }
        
        this.whitespace();

        if (ALPHA.test(this.peek())) return 'doc_type';

        throw new Error('Invalid comment (comments should start with <!--');
    }

    /**
     * Doctype declaration.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.doc_type = function()
    {
        if (!this.html.startsWith('DOCTYPE ')) throw new Error('Invalid doctype declaration');
        
        this.emit('doctype', '<!DOCTYPE');

        this.consume(8);

        let buf = this.buffer(char => char === '>' || SPACE.test(char));

        if (buf.length <= 1) throw new Error('Invalid doctype declaration');

        this.consume(buf.length);

        this.emit('doctype:declaration', buf);

        return 'doc_type_attr';
    }

    /**
     * Doctype attribute.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.doc_type_attr = function()
    {
        // Consume space
        this.whitespace();

        // Closed doctype
        if ('>' == this.peek())
        {
            this.currentTag = null;

            this.emit('doctype:close:self', '');

            return 'text';
        }

        // Doc types don't have "key=value" attributes, only attributes
        // e.g  PUBLIC
        // e.g  "-//W3C//DTD HTML 4.01 Transitional//EN"        
        let end = SPACE;
        
        if ('"' == this.peek()) end = /"/;
        
        if (end !== SPACE) this.consume(1);

        let buf = this.buffer(char => end.test(char) || char === '>');
        
        this.consume(buf.length);
        
        if (end !== SPACE) this.consume(1);
        
        this.emit('doctype:attr', end !== SPACE ? `"${buf}"` : buf);

        return 'doc_type_attr';       
    }

    /**
     * Comment start.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.comment_start = function()
    {
        if (this.peek() === '[') return 'conditional_comment_open';

        this.emit('comment:open', '<!--');

        let buff = this.scan('-->');

        this.consume(buff.length);

        this.emit('comment:body', buff);

        this.consume(3);

        this.emit('comment:close', '-->');

        return 'text';
    }

    /**
     * Conditional comment open.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.conditional_comment_open = function()
    {
        if (this.peekn(4) !== '[if ') throw new Error('Invalid conditional comment');

        let buff = this.scan(']>');

        this.consume(buff.length -1);

        this.emit('comment:open', `<!--${buff}]>`);

        this.consume(3);

        return 'conditional_comment';
    }

    /**
     * Conditional comment.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.conditional_comment = function()
    {
        let buff = this.scan('<![endif]-->');

        this.consume(buff.length);

        this.emit('comment:body', buff);

        this.consume(12);

        this.emit('comment:close', '<![endif]-->');

        return 'text';
    }

    /**
     * cdata start.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.cdata_start = function()
    {
        if (!this.html.startsWith('CDATA[')) throw new Error('Invalid doctype declaration');
        
        this.consume(6);

        this.emit('cdata:open', '<![CDATA[');

        let buff = this.scan(']]>');
    
        this.consume(buff.length);

        this.emit('cdata:body', buff);

        this.consume(3);

        this.emit('cdata:close', ']]>');

        return 'text';
    }

    /**
     * JSX.
     * 
     * @access {private}
     * @return {String}
     */
    Lexer.prototype.jsx_block = function()
    {        
        let blockpeth = 0;
        let opened = this.braceDepth >= 1;

        this.buffer((char, chunk) =>
        {
            if (this.peekback() !== '\\')
            {
                if (char === '{')
                {
                    this.braceDepth++;
                    blockpeth++;
                }
                else if (char === '}')
                {
                   this.braceDepth--;
                   blockpeth--;
                }

                if (this.braceDepth === 0 || char === '<')
                {
                    if (char === '}') this.next();

                    return true;
                }

                // JSX inside neseted jsx function
                if (blockpeth === 0 && chunk[0] === '{')
                {
                    this.next();

                    return true;
                }
            }
        });

        let buff = this.chunk();

        let jsx = buff.trim();

        // Open / close
        if (jsx[0] === '{' && jsx.substr(-1) === '}')
        {
            this.emit('jsx', buff);
        }

        // Close jsx
        else if ((jsx[0] === ')' || jsx[0] === '}') && opened)
        {
            this.emit('jsx:close', buff);
        }

        // Open
        else if (jsx.substr(-1) === '(' || jsx.substr(-1) === '{' || this.braceDepth >= 1)
        {
            this.emit('jsx:open', buff);
        }

        // Nested
        else if (this.braceDepth >= 1)
        {
            this.emit('jsx:open', buff);
        }

        return 'text';  
    }

    /**
     * Lexer parse function.
     * 
     * @param {String}   html
     * @param {Function} emit
     */
    lexer = function(html, emitter)
    {
        let l = new Lexer(html, emitter);

        l.parse();
    }
})();