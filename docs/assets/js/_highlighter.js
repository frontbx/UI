/**
 * Highlight code manually so it's registered to frontbx's DOM
 *
 */
(function()
{
    const [Component] = frontbx.get('Component');
    const [find, on, off, add_class, remove_class, closest, attr, dom_element, extend] = frontbx.import(['find', 'on', 'off', 'add_class', 'remove_class', 'closest', 'attr', 'dom_element', 'extend']).from('_');

    Prism.hooks.add('before-sanity-check', function (env)
    {
  		env.element.innerHTML = env.element.innerHTML.replace(/<br>/g, '\n');
  		env.code = env.element.textContent;
	});

    const Highlighter = function()
    {        
        this.super('pre > code[class*=language-]');
    }

    Highlighter.prototype.bind = function(block)
    {
    	let lang = block.className.trim().split(' ').shift().trim();

    	let div = dom_element({tag: 'div', class: 'fbx-code-snippet'});
    	
    	let pre = closest(block, 'pre');

    	pre.parentNode.replaceChild(div, pre);

       	div.appendChild(pre);

    	attr(pre, 'data-lang', lang);

        Prism.highlightElement(block);

        let copyBtn = dom_element({tag: 'button', type: 'button', role: 'button', class: 'btn-unstyled fbx-clipboard tooltipped tooltipped-ne', dataTooltip: 'Copy to clipboard'}, div, dom_element({tag: 'span', class: 'fa fa-copy'}));

        on(copyBtn, 'click', this._clipboard, this);

        add_class(div, block.className.replaceAll(' ', ','));
    }

    Highlighter.prototype._clipboard = async function(e, btn)
    {
    	let pre  = find('pre', closest(btn, 'div'));
    	let text = pre.innerText.trim();

    	try
    	{
	    	await navigator.clipboard.writeText(text);

	      	add_class(btn, 'copied');

	      	setTimeout(() => remove_class(btn, 'copied'), 3000);
	    }
	    catch (err){ }
    }

    Highlighter.prototype.unbind = function(block)
    {
        let div     = closest(block, 'div');
        let copyBtn = find('.fbx-clipboard', div);
        let code    = block.innerText;

        if (copyBtn) off(copyBtn, 'click', this._clipboard, this);

        block.innerHTML = ''; 
        block.innerText = code;

        div.parentNode.replaceChild(block.parentNode, div);

        copyBtn.parentNode.removeChild(copyBtn);
    }

    frontbx.dom().register('Highlighter', extend(Component, Highlighter), true);

}());