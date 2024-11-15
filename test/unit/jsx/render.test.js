/*import TestCase from '../../testcase.js';

const jsx      = frontbx.jsx(frontbx.IMPORT_AS_REF);
const isIE11   = /Trident\//.test(navigator.userAgent);
const getMixedArray = () => [ 0, 'a', 'b', '<span>c</span>', null, undefined, false, ['e', 'f'], 1];
const mixedArrayHTML = '0ab<span>c</span>ef1';

class Test extends TestCase
{
   run()
   {
		describe('JSX Rendering', () =>
		{
			let scratch;
			let instance;

			beforeEach(() => scratch = this.setupScratch());
			
			afterEach(() => this.teardown(scratch));
			
			describe('Basic values', () =>
			{
				it('should render strings as text content', () =>
				{
					jsx('Testing, huh! How is it going?', scratch);

					this.expect(scratch.innerHTML).to.equal('Testing, huh! How is it going?');
				});

				it('should render arrays of mixed elements', () =>
				{
					jsx(getMixedArray(), scratch);

					this.expect(scratch.innerHTML).to.equal(mixedArrayHTML);
				});

				it('should render an empty text node given an empty string', () =>
				{
					jsx('', scratch);
					let c = scratch.childNodes;
					this.expect(c).to.have.length(1);
					this.expect(c[0].data).to.equal('');
					this.expect(c[0].nodeName).to.equal('#text');
				});

				it('should create empty nodes (<* />)', () =>
				{
					jsx(`<div />`, scratch);
					this.expect(scratch.childNodes).to.have.length(1);
					this.expect(scratch.childNodes[0].nodeName.toUpperCase()).to.equal('DIV');

					this.teardown(scratch);
					scratch = this.setupScratch();

					jsx(`<span />`, scratch);
					this.expect(scratch.childNodes).to.have.length(1);
					this.expect(scratch.childNodes[0].nodeName.toUpperCase()).to.equal('SPAN');
				});

				it('should not render falsy values', () =>
				{
					jsx(`
						<div>
							{[null,undefined,false,0,NaN]}
						</div>
					`, scratch);

					this.expect(scratch.firstChild).to.have.property('innerHTML', '0');
				});
				
				it('should render string', () =>
				{
					let StringComponent = () => 'Hi there';

					jsx(`<StringComponent />`, scratch, { StringComponent });

					this.expect(scratch.innerHTML).to.equal('Hi there');
				});

				it('should render number as string', () =>
				{
					let NumberComponent = () => 42;

					jsx(`<NumberComponent />`, scratch, { NumberComponent });

					this.expect(scratch.innerHTML).to.equal('42');
				});

				
				it('should not render null', () =>
				{
					jsx(null, scratch);
					this.expect(scratch.innerHTML).to.equal('');
					this.expect(scratch.childNodes).to.have.length(1);
				});

				it('should not render undefined', () =>
				{
					jsx(undefined, scratch);
					this.expect(scratch.innerHTML).to.equal('');
					this.expect(scratch.childNodes).to.have.length(1);
				});

				it('should not render boolean true', () =>
				{
					jsx(true, scratch);
					this.expect(scratch.innerHTML).to.equal('');
					this.expect(scratch.childNodes).to.have.length(1);
				});

				it('should not render boolean false', () =>
				{
					jsx(false, scratch);
					this.expect(scratch.innerHTML).to.equal('');
					this.expect(scratch.childNodes).to.have.length(1);
				});

				it('should render empty text text nodes', () =>
				{
					jsx('', scratch);
					this.expect(scratch.childNodes.length).to.equal(1);
					this.expect(scratch.childNodes[0].textContent).to.equal('');
				});

				it('should render whitespace text text nodes', () =>
				{
					jsx('<div> f </div>', scratch);
					this.expect(scratch.children[0].innerHTML).to.equal(' f ');
				});

				it('should render NaN as text content', () =>
				{
					jsx(NaN, scratch);
					this.expect(scratch.innerHTML).to.equal('NaN');
				});

				it('should render numbers (0) as text content', () =>
				{
					jsx(0, scratch);
					this.expect(scratch.innerHTML).to.equal('0');
				});

				it('should render numbers (42) as text content', () =>
				{
					jsx(42, scratch);
					this.expect(scratch.innerHTML).to.equal('42');
				});

				it('should render bigint as text content', () =>
				{
					// Skip in browsers not supporting big integers
					if (typeof BigInt === 'undefined')
					{
						return;
					}

					// eslint-disable-next-line no-undef, new-cap
					jsx(BigInt(4), scratch);
					this.expect(scratch.innerHTML).to.equal('4');
				});

				it('should support custom tag names', () => 
				{
					jsx(`<foo />`, scratch);
					this.expect(scratch.childNodes).to.have.length(1);
					this.expect(scratch.childNodes[0].nodeName.toUpperCase()).to.equal('FOO');

					this.teardown(scratch);
					scratch = this.setupScratch();

					jsx(`<x-bar />`, scratch);
					this.expect(scratch.childNodes).to.have.length(1);
					this.expect(scratch.childNodes[0].nodeName.toUpperCase()).to.equal('X-BAR');
				});

				it('should parse SVG', () => 
				{
					jsx(`
						<svg style="display: none;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1451 1451" xml:space="preserve">
            			<g id="logo">
            				<path d="M73.11,349.67c0,0,0,537.15,0,607c0,69.9,61.15,122.3,61.15,122.3s253.25,157.21,388.64,240.21 c135.38,82.96,205.26,30.55,205.26,30.55s454.18-152.83,552.31-188.6c98.13-35.79,98.4-130.2,98.4-130.2V415.16 c-4.39-69.86-86.53-105.02-86.53-105.02s-254.12-130.76-359.48-188.39C827.56,64.16,736.89,92.03,736.89,92.03 S243.44,236.14,151.73,262.31C60.03,288.53,73.11,349.67,73.11,349.67z M553.52,566.7c0,0-250.63-137.49-349.9-202.71 c-74.18-48.75,8.5-72.03,8.5-72.03s404.83-115.37,509.67-145.92c104.8-30.57,155.69,2.53,155.69,2.53L1266.2,338.8 c88.97,46.6,4.34,67.41,4.34,67.41s-43.1,13.45-105,32.91l1.65,422.15l-128.47-117.73L852.47,995.55l3.59-457.65 c-44.98,14.72-83,27.48-106.74,36.02C640.1,613.22,553.52,566.7,553.52,566.7z M178.62,405.64L547.95,627.8 c0,0,66.72,27.79,66.72,108.32c0,80.54,2.73,497.09,2.73,497.09s2.78,88.89-74.95,47.21c-77.78-41.62-361.06-219.37-361.06-219.37 s-63.83-30.49-63.83-99.97c0-77.76,0-508.22,0-508.22S109.18,363.99,178.62,405.64z"/>
            			</g>
            		</svg>`, scratch);

					this.expect(scratch.innerHTML).to.equal('<svg style="display: none;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" view-box="0 0 1451 1451" xml:space="preserve"><g id="logo"><path d="M73.11,349.67c0,0,0,537.15,0,607c0,69.9,61.15,122.3,61.15,122.3s253.25,157.21,388.64,240.21 c135.38,82.96,205.26,30.55,205.26,30.55s454.18-152.83,552.31-188.6c98.13-35.79,98.4-130.2,98.4-130.2V415.16 c-4.39-69.86-86.53-105.02-86.53-105.02s-254.12-130.76-359.48-188.39C827.56,64.16,736.89,92.03,736.89,92.03 S243.44,236.14,151.73,262.31C60.03,288.53,73.11,349.67,73.11,349.67z M553.52,566.7c0,0-250.63-137.49-349.9-202.71 c-74.18-48.75,8.5-72.03,8.5-72.03s404.83-115.37,509.67-145.92c104.8-30.57,155.69,2.53,155.69,2.53L1266.2,338.8 c88.97,46.6,4.34,67.41,4.34,67.41s-43.1,13.45-105,32.91l1.65,422.15l-128.47-117.73L852.47,995.55l3.59-457.65 c-44.98,14.72-83,27.48-106.74,36.02C640.1,613.22,553.52,566.7,553.52,566.7z M178.62,405.64L547.95,627.8 c0,0,66.72,27.79,66.72,108.32c0,80.54,2.73,497.09,2.73,497.09s2.78,88.89-74.95,47.21c-77.78-41.62-361.06-219.37-361.06-219.37 s-63.83-30.49-63.83-99.97c0-77.76,0-508.22,0-508.22S109.18,363.99,178.62,405.64z"></path></g></svg>');
				});

				it('should not ignore HTML comments', () => 
				{
					jsx(`<div> Foo <!-- Hello world ---></div>`, scratch);
					this.expect(scratch.innerHTML).to.equal('<div> Foo <!-- Hello world ---></div>');
				});

				it('should not ignore conditional comments', () => 
				{
					jsx(`<!--[if lt IE 9]><div>Foo</div><![endif]-->`, scratch);
					this.expect(scratch.innerHTML).to.equal('<!--[if lt IE 9]><div>Foo</div><![endif]-->');
				});

				it('should ignore HTML doctype', () => 
				{
					jsx('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"><div />', scratch);
					this.expect(scratch.innerHTML).to.equal('<div></div>');
				});

				it('should ignore CDATA', () => 
				{
					jsx('<![CDATA[ < > & ]]><div />', scratch);
					this.expect(scratch.innerHTML).to.equal('<div></div>');
				});

				it('should throw on bogus tags', () => 
				{
					this.expect(() => jsx('<? div />', scratch)).to.throw();
				});

				it('should throw on bogus comments', () => 
				{
					this.expect(() => jsx('<!- foo --->', scratch)).to.throw();
				});

			});

			describe('Node attributes', () =>
			{
				it('should not throw error in IE11 with type date', () =>
				{
					this.expect(() => jsx(`<input type="date" />`, scratch)).to.not.throw();
				});

				it('should support the form attribute', () => 
				{
					jsx(
						`<div>
							<form id="myform" />
							<button form="myform">test</button>
							<input form="myform" />
						</div>`,
					scratch);

					let div = scratch.children[0];
					let form = div.children[0];
					let button = div.children[1];
					let input = div.children[2];

					// IE11 doesn't support the form attribute
					if (!isIE11)
					{
						this.expect(button).to.have.property('form', form);
						this.expect(input).to.have.property('form', form);
					}
				});

				it('should set falsy input values', () => {
					
					// Note: this test just demonstrates the default browser behavior
					jsx(`
						<div>
							<input {value : 0} />
							<input {value : false}  />
							<input {value : null}  />
							<input {value : undefined} />
						</div>
					`, scratch);

					let div = scratch.firstChild;
					this.expect(div.children[0]).to.have.property('value', '0');
					this.expect(div.children[1]).to.have.property('value', '');
					this.expect(div.children[2]).to.have.property('value', '');
					this.expect(div.children[3]).to.have.property('value', '');
				});

				it('should set value inside the specified range', () =>
				{
					jsx(`
						<input type="range" value="0.5" min="0" max="1" step="0.05" />
					`, scratch);
					this.expect(scratch.firstChild.value).to.equal('0.5');
				});

				it('should set enumerable boolean attribute', () =>
				{
					jsx(`<input checked="false" />`, scratch);
					this.expect(scratch.firstChild.checked).to.equal(false);
				});

				it('should render download attribute', () =>
				{
					jsx(`<a download="" />`, scratch);
					this.expect(scratch.firstChild.getAttribute('download')).to.equal(null);

					jsx(`<a download="null" />`, scratch);
					this.expect(scratch.firstChild.getAttribute('download')).to.equal(null);
				});

				it('should not set tagName', () =>
				{
					this.expect(() => jsx(`<input tagName="div" />`, scratch)).not.to.throw();
				});

				it('should apply string attributes', () =>
				{
					jsx(`<div foo="bar" data-foo="databar" />`, scratch);
					this.expect(scratch.innerHTML).to.equal('<div foo="bar" data-foo="databar"></div>');
				});

				it('should not serialize function props as attributes', () =>
				{
					jsx(`<div { {onclick: e => {}, ONCLICK: e => {} }} />`, scratch);

					let div = scratch.childNodes[0];

					this.expect(div.attributes.length).to.equal(0);
				});

				it('should serialize object props as attributes', () =>
				{
					jsx(`
						<div {{
							foo: { a: 'b' },
							bar: { toString() { return 'abc'; } }
						}}
						/>
					`, scratch);

					let div = scratch.childNodes[0];
					this.expect(div.attributes.length).to.equal(2);

					// Normalize attribute order because it's different in various browsers
					let normalized = {};
					for (let i = 0; i < div.attributes.length; i++) {
						let attr = div.attributes[i];
						normalized[attr.name] = attr.value;
					}

					this.expect(normalized).to.deep.equal({
						bar: 'abc',
						foo: '[object Object]'
					});
				});

				it('should apply class as String', () =>
				{
					jsx(`<div class="foo" />`, scratch);
					this.expect(scratch.childNodes[0]).to.have.property('className', 'foo');
				});

				it('should alias className to class', () =>
				{
					jsx(`<div className="bar" />`, scratch)
					this.expect(scratch.childNodes[0]).to.have.property('className', 'bar');
				});

				it('should support false string aria-* attributes', () =>
				{
					jsx(`<div aria-checked="false" />`, scratch);
					this.expect(scratch.firstChild.getAttribute('aria-checked')).to.equal('false');
				});

				it('should support false aria-* attributes', () =>
				{
					jsx(`<div {{ ariaChecked: false }} />`, scratch);
					this.expect(scratch.firstChild.getAttribute('aria-checked')).to.equal('false');
				});

				it('should support false data-* attributes', () =>
				{
					jsx(`<div {{ dataChecked: false }} />`, scratch);
					this.expect(scratch.firstChild.getAttribute('data-checked')).to.equal('false');
				});

				it('should set checked attribute on custom elements without checked property', () =>
				{
					jsx(`<checkboxed checked />`, scratch);

					this.expect(scratch.innerHTML).to.equal('<checkboxed checked="true"></checkboxed>');
				});

				it('should set value attribute on custom elements without value property', () =>
				{
					jsx(`<o-input value="test" />`, scratch);
					this.expect(scratch.innerHTML).to.equal('<o-input value="test"></o-input>');
				});

				it('should unset href if null || undefined', () =>
				{
					jsx(`
						<pre>
							<a href="#">href="#"</a>
							<a { href: undefined})}></a>
							<a { href: null})}>href="null"</a>
							<a { href: ''}>href="''"</a>
						</pre>
					`, scratch);

					const links = scratch.querySelectorAll('a');
					this.expect(links[0].hasAttribute('href')).to.equal(true);
					this.expect(links[1].hasAttribute('href')).to.equal(false);
					this.expect(links[2].hasAttribute('href')).to.equal(false);
					this.expect(links[3].hasAttribute('href')).to.equal(false);
				});

			});
	
			describe('Children', () =>
			{
				it('should nest children', () =>
				{
					jsx(`<div>
							<ul>
								<li><a href="#">foo</a></li>
							</ul>
							<span>foo</span>
					</div>`, scratch);
					this.expect(scratch.innerHTML).to.equal('<div><ul><li><a href="#">foo</a></li></ul><span>foo</span></div>');
				});

				it('should nest child nodes and text', () =>
				{
					jsx(`<div><span>foo</span>foo<span>bar</span>foo bar</div>`, scratch);
					this.expect(scratch.innerHTML).to.equal('<div><span>foo</span>foo<span>bar</span>foo bar</div>');
				});

				it('should not render empty children function children', () =>
				{
					jsx(`<div>{() => {}}</div>`, scratch);
					
					this.expect(scratch.innerHTML).to.equal('<div></div>');
				});

				it('should allow node reuse', () =>
				{
					let reused = jsx(`<div class="reuse">Hello World!</div>`);

					jsx(
						`<div>
							{reused}
							<hr />
							{reused}
						</div>`,
						scratch,
						{ reused: reused }
					);
					
					this.expect(this.serializeHtml(scratch)).to.eql(
						`<div id="scratch"><div><div class="reuse">Hello World!</div><hr><div class="reuse">Hello World!</div></div></div>`
					);

					this.teardown(scratch);
					scratch = this.setupScratch();

					jsx(
						`<div>
							<hr />
							{reused}
						</div>`,
						scratch,
						{ reused: reused }
					);

					this.expect(this.serializeHtml(scratch)).to.eql(
						`<div id="scratch"><div><hr><div class="reuse">Hello World!</div></div></div>`
					);
				});

				it('should nest empty nodes', () =>
				{
					jsx(`
						<div>
							<span />
							<foo />
							<x-bar />
						</div>
					`, scratch);

					this.expect(scratch.children).to.have.length(1);
					this.expect(scratch.children[0].nodeName.toUpperCase()).to.equal('DIV');

					let c = scratch.children[0].children;
					this.expect(c).to.have.length(3);
					this.expect(c[0].nodeName).to.equal('SPAN');
					this.expect(c[1].nodeName).to.equal('FOO');
					this.expect(c[2].nodeName).to.equal('X-BAR');
				});
			});
			
		});
	}
}

let test = new Test();

test.run();
*/