(function()
{
    Tokenizer = function(htmlstr)
    {
        this.htmlstr = htmlstr;

        this.stack = { children: [] };
        
        this.currAttr = null;

        this.curr = this.stack;

        this.parent = [];
    }

    Tokenizer.prototype.parse = function()
    {
        const delegate = (token, value) => 
        {            
            this.readtoken(token, value);
        }
        
        lexer(this.htmlstr, delegate);

        return this.stack.children;
    }

    Tokenizer.prototype.pushNode = function(node)
    {
        this.curr.children.push(node);

        this.parent.push(this.curr);

        this.curr = node;
    }

    Tokenizer.prototype.pushValue = function(val)
    {
        this.curr.value += val;
    }

    Tokenizer.prototype.pushChild = function(node)
    {        
        this.curr.children.push(node);
    }

    Tokenizer.prototype.closeNode = function()
    {
        this.curr = this.parent.pop();
    }

    Tokenizer.prototype.pushAttr = function(value)
    {
        this.curr.attrs[value] = true;

        this.currAttr = value;
    }

    Tokenizer.prototype.pushAttrSpread = function(value)
    {
        this.curr.spreadAttribute = value;
    }

    Tokenizer.prototype.pushAttrVal = function(value)
    {
        this.curr.attrs[this.currAttr] = value;

        this.currAttr = null;
    }

    Tokenizer.prototype.pushJsx = function(value)
    {
        this.pushChild(this.node('#jsx', value));
    }

    Tokenizer.prototype.openJsx = function(value)
    {   
        let node = this.node('#jsx:function');

        node.open = value;

        this.pushNode(node);
    }

    Tokenizer.prototype.closeJsx = function(value)
    {    
        while (this.curr.type !== '#jsx:function')
        {
            this.curr = this.parent.pop();
        }

        this.curr.close = value;
    }

    Tokenizer.prototype.node = function(type, value, children)
    {
        let attrs = {};
        children  = children || [];

        return { type, value, children, attrs };
    }

    Tokenizer.prototype.readtoken = function(token, value)
    {
        switch (token)
        {
            case 'text':
                this.pushChild({type: '#text', value: value});
                break;

            case 'tag:open':
                this.pushNode(this.node(value[0].toLowerCase() === value[0] ? '#element' : (value === 'Fragment' ? '#fragment' : '#component'), value));
                break;

            case 'tag:close:void':
            case 'tag:close:self':
            case 'tag:close':
                this.closeNode();
                break;

            case 'jsx':
                this.pushJsx(value);
                break;

            case 'jsx:open':
                this.openJsx(value);
                break;

            case 'jsx:close':
                this.closeJsx(value);
                break;

            case 'attr:key':
                this.pushAttr(value);
                break;

            case 'attr:jsx:spread':
                this.pushAttrSpread(value);
                break;

            case 'attr:val':
            case 'attr:val:jsx':
                this.pushAttrVal(value);
                break;

            case 'attr:val:interpolated':
                this.pushAttrVal(`\`${value}\``);
                break;

            case 'comment:open':
                this.pushNode(this.node('#comment', value));
                break;

            case 'comment:body':
                this.pushValue(value);
                break;

            case 'comment:close':
                this.pushValue(value);
                this.closeNode();
                break;

        }

        this.prev = token;
    }

})();