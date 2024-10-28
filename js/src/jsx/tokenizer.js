var Tokenizer;

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
        
        Lexer(this.htmlstr, delegate);

        if (this.stack.children.length > 1)
        {
            this.stack.type = '#fragment';

            return this.stack;
        }
        
        return this.stack.children[0];
    }

    Tokenizer.prototype.pushNode = function(node)
    {
        this.curr.children.push(node);

        this.parent.push(this.curr);

        this.curr = node;
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

    Tokenizer.prototype.pushAttrVal = function(value)
    {
        this.curr.attrs[this.currAttr] = value;

        this.currAttr = null;
    }

    Tokenizer.prototype.readtoken = function(token, value)
    {        
        switch (token)
        {
            case 'text':
                
                value = value.trim();

                this.pushChild({
                    __isvnode: true,
                    type: value === '' ? '#empty' : '#text',
                    value : value
                });
                break;

            case 'tagclosevoid':
                this.closeNode();
                break;

            case 'tagselfclose':
                this.closeNode();
                break;

             case 'tagclose':
                this.closeNode();
                break;

            case 'tagopen':
                this.pushNode({ 
                    __isvnode: true,
                    type : value[0].toLowerCase() === value[0] ? '#element' : '#component',
                    value : value,
                    attrs: {},
                    children: [],
                });
                break;

            case 'attrkey':
                this.pushAttr(value);
                break;

            case 'attrval':
                this.pushAttrVal(value);
                break;
        }

        this.prev = token;
    }

})();