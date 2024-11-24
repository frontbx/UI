import { use as usechai, expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import frontbx from '../dist/js/frontbx.esm.js';

const VOID_ELEMENTS = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;

/**
 * Boolean attributes
 *
 * @var {array}
 */
const BOOLEAN_ATTRS = 
[
	'allowfullscreen',
	'async',
	'autofocus',
	'autoplay',
	'checked',
	'controls',
	'default',
	'defer',
	'disabled',
	'formnovalidate',
	'inert',
	'ismap',
	'itemscope',
	'loop',
	'multiple',
	'muted',
	'nomodule',
	'novalidate',
	'open',
	'playsinline',
	'readonly',
	'required',
	'reversed',
	'selected'
];

function encodeEntities(str)
{
	return str.replace(/&/g, '&amp;');
}

/**
 * Serialize a DOM tree.
 * Uses deterministic sorting where necessary to ensure consistent tests.
 * @param {Element|Node} node	The root node to serialize
 * @returns {string} html
 */
function serializeDomTree(node)
{
	
}

export default class Test
{
	constructor()
	{
		this.chai = usechai(sinonChai);

		this.sinon = sinon;
	}
	
	expect()
	{
		return expect(...arguments);
	}

	setupScratch(node)
	{
		let root = (document.body || document.documentElement);

		const scratch = document.createElement('div');

		scratch.id = 'scratch';

		if (node) scratch.appendChild(node);
		
		root.appendChild(scratch);
		
		return scratch;
	}

	teardown(scratch)
	{	
		let root = (document.body || document.documentElement);

		if (scratch) scratch.parentNode.removeChild(scratch);

		root.innerHTML = '';
	}

	serializeHtml(node)
	{
		if (node.nodeType === 3)
		{
			return encodeEntities(node.data);
		}
		else if (node.nodeType === 8)
		{
			return '<!--' + encodeEntities(node.data) + '-->';
		}
		else if (node.nodeType === 1 || node.nodeType === 9)
		{
			let str = '<' + node.localName;
			const attrs = [];
			for (let i = 0; i < node.attributes.length; i++)
			{
				attrs.push(node.attributes[i].name);
			}
			attrs.sort();

			for (let i = 0; i < attrs.length; i++)
			{
				const name = attrs[i];
				let value = node.getAttribute(name);

				// don't render attributes with null or undefined values
				if (value == null) continue;

				// normalize empty class attribute
				if (!value && name === 'class') continue;

				str += ' ' + name;
				value = encodeEntities(value);

				// normalize svg <path d="value">
				if (node.localName === 'path' && name === 'd')
				{
					value = normalizePath(value);
				}

				if (!BOOLEAN_ATTRS.includes(name))
				{
					str += '="' + value + '"';
				}				
			}
			str += '>';

			// For elements that don't have children (e.g. <wbr />) don't descend.
			if (!VOID_ELEMENTS.test(node.localName))
			{
				// IE puts the value of a textarea as its children while other browsers don't.
				// Normalize those differences by forcing textarea to not have children.
				if (node.localName != 'textarea')
				{
					let child = node.firstChild;
					
					while (child)
					{
						str += this.serializeHtml(child);
						
						child = child.nextSibling;
					}
				}

				str += '</' + node.localName + '>';
			}

			return str;
		}
	}

	sortAttributes(html)
	{
		return html.replace(
			/<([a-z0-9-]+)((?:\s+[a-z0-9:_.-]+=".*?")+)((?:\s*\/)?>)/gi,
			(s, pre, attrs, after) => {
				let list = attrs.split(/\s/).filter(Boolean).map(e => e.trim()).sort((a, b) => (a > b ? 1 : -1));
				if (~after.indexOf('/')) after = '></' + pre + '>';
				return '<' + pre + ' ' + list.join(' ') + after;
			}
		);
	}

	getAttributes(element)
	{
		let attrs = {};

		if (node.attributes)
		{
			for (let i = node.attributes.length; i--; )
			{
				attrs[node.attributes[i].name] = node.attributes[i].value;
			}
		}

		return attrs;
	}
}