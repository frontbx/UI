var Lexer;

(function()
{    
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
    ];

    let tag;
    let state;
    let inquotes = false;
    let braceDepth = 0;

    /**
    * Scan the given `html`.
    * 
    * @param {String} html
    * @param {Function} emit
    */
    Lexer = function(html, emit)
    {
        var scan = text
        , pos = 0;

        /**
        * scan
        */
        while (scan = scan());

        /**
        * next
        */
        function next()
        {
            return html.charAt(pos++);
        }

        /**
        * peek
        */
        function peek()
        {
            return html.charAt(pos);
        }

        /**
        * peek
        */
        function peekn(n)
        {            
            return html.slice(pos, pos + n);
        }

        /**
        * consume
        */
        function consume(n)
        {
            html = html.substr(n);
            pos = 0;
        }

        /**
        * `>(text)<`
        */
        function text()
        {
            if ('>' == peek()) consume(1);
            
            while (lessthan());
            
            var buf = html.slice(0, pos);
            
            consume(buf.length);

            if (html === '') return emit('complete');
            
            if (buf)
            {
                tag = null;

                emit('text', buf);
            }

            // treat `< ` as text
            if (0 == html.indexOf('< '))
            {
                buf += html.slice(0, 2);

                consume(2);
                
                return text;
            }

            // ignore `<!`
            if (0 == html.indexOf('<!--'))
            {
                buf += html.slice(0, 4);

                consume(4);

                emit('commentopen');

                while (comment());

                buf = html.slice(0, pos);
            
                consume(buf.length);

                emit('comment', buf);

                consume(3);

                emit('commentclose');

                return text;
            }

            // close
            if (0 == html.indexOf('</'))
            {
                return close;
            }

            // open
            if ('<' == peek())
            {
                return open;
            }
        }

        /**
        * `<(tag)`
        */
        function open()
        {
            while (' ' != peek() && '>' != peek() && next());

            var buf = html.slice(0, pos);

            consume(buf.length);

            tag = buf.substr(1);

            if (1 < buf.length) emit('tagopen', buf.substr(1));

            return attrkey;
        }

        /**
        * ` *(key)*`
        */
        function attrkey()
        {
            whitespace();

            if ('/' === peek())
            {
                consume(1);

                whitespace();

                if ('>' === peek())
                {
                    tag = null;

                    emit('tagselfclose', '');
                }
            }

            while ('>' != peek() && ' ' != peek() && '=' != peek() && next());

            var buf = html.slice(0, pos);
            
            consume(buf.length);
            
            if (buf) emit('attrkey', buf.trim());
            
            return attrval;
        }

        /**
        * `=?(["'](val)['"])`
        */
        function attrval()
        {
            if (' ' == peek()) return attrkey;
            
            if ('>' == peek())
            {
                if (tag && VOID_ELS.includes(tag)) emit('tagclosevoid');

                return text;
            }
            
            if ('=' == peek()) consume(1);
            
            var end = ' ';

            if ("{" == peek()) end = '}';
            
            if ('"' == peek()) end = '"';
            
            if ("'" == peek()) end = "'";

            if (' ' != end) consume(1);
            
            while (end != peek() && next());
            
            var buf = html.slice(0, pos);
            
            consume(buf.length);
            
            if (' ' != end) consume(1);
            
            emit('attrval', buf);
            
            return attrval;
        }

        /**
        * `</(tag)`
        */
        function close()
        {
            while (greaterthan());
            
            var buf = html.slice(0, pos);
            
            consume(1 + buf.length);
            
            if (2 < buf.length) emit('tagclose', buf.substr(2));
            
            return text;
        }

        /**
        * consume whitespace.
        */
        function whitespace()
        {
            while (' ' == peek() && next());

            consume(pos);
        }

        /**
        * scan `<`
        */
        function lessthan()
        {
            return '<' != peek() && next();
        }

        /**
        * scan `>`
        */
        function greaterthan()
        {
            return '>' != peek() && next();
        }

        /**
        * scan `-->`
        */
        function comment()
        {
            return '-->' != peekn(3) && next();
        }
    };
    
})();