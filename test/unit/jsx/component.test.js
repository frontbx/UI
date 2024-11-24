import TestCase from '../../testcase.js';

const jsx = frontbx.jsx(frontbx.IMPORT_AS_REF);

class Test extends TestCase
{
   run()
   {
		describe('JSX Components', () =>
		{
			let scratch;
			let PROPS;
			let Component = frontbx.Component(frontbx.IMPORT_AS_REF);
			
			beforeEach(() => scratch = this.setupScratch());
			
			afterEach(() => this.teardown(scratch));
			
			describe('Component construction', () =>
			{
				beforeEach(() =>
				{
					PROPS = { foo: 'bar', onclick: () => {} };
				});

				it('should super on class components', () =>
				{
					class ClassComp extends Component
					{
						constructor(props)
						{
							super()
						}

						render(props)
						{
							return `<div>Hello</div>`;
						}
					}

					let instance = new ClassComp;

					this.expect(instance.defaultProps).to.deep.equal({});
				});

				it('should construct components', () =>
				{
					class ClassComp extends Component
					{
						render(props)
						{
							return `<div>Hello</div>`;
						}
					}

					jsx(`<ClassComp {PROPS} />`, scratch, { ClassComp, PROPS });

					this.expect(scratch.innerHTML).to.equal('<div>Hello</div>');
				});

				it('should construct functional components', () =>
				{
					let testvar;

					let FunctionComp = function()
					{
						testvar = 'foo';
					}

					FunctionComp.prototype.render = function(props)
					{
						return `<div>Hello</div>`;
					}

					jsx(`<FunctionComp {PROPS} />`, scratch, { FunctionComp, PROPS });

					this.expect(scratch.innerHTML).to.equal('<div>Hello</div>');

					this.expect(testvar).to.equal('foo');
				});

				it('should throw on class components without a render function', () =>
				{
					let passedProps;

					class ClassComp extends Component { }

					let instance = new ClassComp;

					this.expect(() => jsx(`<ClassComp {PROPS} />`, scratch, { ClassComp: instance })).to.throw();
				});

				it('should throw on class components without a render function', () =>
				{
					let passedProps;

					class ClassComp { }

					let instance = new ClassComp;

					this.expect(() => jsx(`<ClassComp {PROPS} />`, scratch, { ClassComp: instance })).to.throw();
				});

				it('should construct fragments', () =>
				{
					jsx(`<Fragment><span>Hello</span><span>World</span></Fragment>`, scratch);

					this.expect(scratch.innerHTML).to.equal('<span>Hello</span><span>World</span>');
				});

				it('should pass attribute props to render on class components', () =>
				{
					class ClassComp extends Component
					{
						render(props)
						{
							return `<div>Hello</div>`;
						}
					}

					let instance = new ClassComp;

					this.sinon.spy(ClassComp.prototype, 'render');
								
					jsx(`<ClassComp class="foo" id="bar" data-foo="baz" />`, scratch, { ClassComp: instance });

					this.expect(ClassComp.prototype.render)
						.to.have.been.calledOnce
						.and.to.have.been.calledWith({class: 'foo', id: 'bar', 'data-foo': 'baz', children: []});
				});

				it('should parse variables from class component properties', () =>
				{
					class TestComp
					{
						render(props)
						{
							return `<div>{foo}</div>`;
						}
					}

					TestComp.prototype.foo = 'bar';

					jsx(`<TestComp />`, scratch, { TestComp });

					this.expect(scratch.innerHTML).to.equal('<div>bar</div>');
				});

				it('should parse variables from functional component properties', () =>
				{
					let TestFunc = (props) => `<div>{foo}</div>`;

					TestFunc.foo = 'bar';

					jsx(`<TestFunc />`, scratch, { TestFunc });

					this.expect(scratch.innerHTML).to.equal('<div>bar</div>');
				});

				it('should interpolate this in class components', () =>
				{
					class TestComp
					{
						render(props)
						{
							return `<div>{this.foo}</div>`;
						}
					}

					TestComp.prototype.foo = 'bar';

					jsx(`<TestComp />`, scratch, { TestComp, foo: 'bar' });

					this.expect(scratch.innerHTML).to.equal('<div>bar</div>');
				});

				it('should interpolate this in functional components', () =>
				{
					let testvar;

					let FunctionComp = function()
					{
						this.foo = 'bar';
					}

					FunctionComp.prototype.render = function(props)
					{
						return `<div>{this.foo}</div>`;
					}

					jsx(`<FunctionComp />`, scratch, { FunctionComp });

					this.expect(scratch.innerHTML).to.equal('<div>bar</div>');

				});

				it('should pass jsx spread props to render on class components', () =>
				{
					class ClassComp extends Component
					{
						render(props)
						{
							return `<div>Hello</div>`;
						}
					}

					let instance = new ClassComp;

					this.sinon.spy(ClassComp.prototype, 'render');
								
					jsx(`<ClassComp {...PROPS} />`, scratch, { ClassComp: instance, PROPS });

					this.expect(ClassComp.prototype.render)
						.to.have.been.calledOnce
						.and.to.have.been.calledWith({...PROPS, children: [] });
				});

				it('should pass attribute props to functional components', () =>
				{
					let FuncComp = this.sinon.spy((props) => '<div>Hello</div>');
					
					jsx(`<FuncComp class="foo" id="bar" data-foo="baz" />`, scratch, { FuncComp, PROPS });

					this.expect(FuncComp)
						.to.have.been.calledOnce
						.and.to.have.been.calledWith({class: 'foo', id: 'bar', 'data-foo': 'baz', children: []});
				});

				it('should pass jsx spread props to functional components', () =>
				{
					let FuncComp = this.sinon.spy((props) => '<div>Hello</div>');
					
					jsx(`<FuncComp {...PROPS} />`, scratch, { FuncComp, PROPS });

					this.expect(FuncComp)
						.to.have.been.calledOnce
						.and.to.have.been.calledWith({...PROPS, children: [] });
				});

				it('should merge default props on class components', () =>
				{
					class ClassComp extends Component
					{
						defaultProps = {default: 'foo'};

						render(props)
						{
							return `<div>Hello</div>`;
						}
					}

					let instance = new ClassComp;

					this.sinon.spy(ClassComp.prototype, 'render');
								
					jsx(`<ClassComp {...PROPS} />`, scratch, { ClassComp: instance, PROPS });

					this.expect(ClassComp.prototype.render)
						.to.have.been.calledOnce
						.and.to.have.been.calledWith({...PROPS, default: 'foo', children: []});
				});

				it('Should render class component nodes', () =>
				{
					class ClassComp extends Component
					{
						render()
						{
							return `<div>Hello</div>`;
						}
					}

					let instance = new ClassComp;

					this.sinon.spy(ClassComp.prototype, 'render');
								
					jsx('<ClassComp />', scratch, { ClassComp: instance });

					this.expect(ClassComp.prototype.render)
						.to.have.been.calledOnce
						.and.to.have.returned(this.sinon.match('<div>Hello</div>'));
					
					this.expect(scratch.innerHTML).to.equal('<div>Hello</div>');
				});

				it('should render functional component nodes', () =>
				{
					let FuncComp = this.sinon.spy((props) => '<div>Hello</div>');
					
					jsx(`<FuncComp />`, scratch, { FuncComp });

					this.expect(FuncComp)
						.to.have.been.calledOnce
						.and.to.have.returned(this.sinon.match('<div>Hello</div>'));
				
					this.expect(scratch.innerHTML).to.equal('<div>Hello</div>');
				});

				it('should render class component props onto nodes', () =>
				{
					class ClassComp extends Component
					{
						render(props)
						{
							return `<div {...props}>Hello</div>`;
						}
					}

					this.sinon.spy(ClassComp.prototype, 'render');

					jsx(`<ClassComp {...PROPS} />`, scratch, { ClassComp, PROPS });

					this.expect(ClassComp.prototype.render)
						.to.have.been.calledOnce
						.and.to.have.been.calledWith({...PROPS, children: [] });

					this.expect(scratch.innerHTML).to.equal('<div foo="bar">Hello</div>');
				});

				it('should render functional components props onto nodes', () =>
				{
					let FuncComp = this.sinon.spy((props) => `<div { ...props }>Hello</div>`);
					
					jsx(`<FuncComp {...PROPS} />`, scratch, { FuncComp, PROPS });

					this.expect(FuncComp)
						.to.have.been.calledOnce
						.and.to.have.been.calledWith({...PROPS, children: []});
				
					this.expect(scratch.innerHTML).to.equal('<div foo="bar">Hello</div>');
				});

				it('should render components from aliases', () =>
				{
					let passedProps;

					class ClassComp extends Component
					{
						render(_props)
						{
							return `<div>Hello</div>`;
						}
					}

					let instance = new ClassComp;

					this.sinon.spy(ClassComp.prototype, 'render');

					jsx(`<TestClass  />`, scratch, { TestClass: instance });

					this.expect(ClassComp.prototype.render).to.have.been.calledOnce;

					this.expect(scratch.innerHTML).to.equal('<div>Hello</div>');
				});

				it('should render extended Component classes', () =>
				{
					class C extends Component
					{

					}

					class B extends C
					{

					}

					class A extends B
					{
						render()
						{
							return `<p>Hello world!</p>`;
						}
					}

					let instance = new A;

					this.sinon.spy(A.prototype, 'render');

					jsx(`<A />`, scratch, { A: instance });

					this.expect(scratch.innerHTML).to.equal('<p>Hello world!</p>');

					this.expect(A.prototype.render).to.have.been.calledOnce;

				});

				it('should render nested Component classes with render overrides', () =>
				{
					class C extends Component
					{
						render()
						{
							return `<p>Foo</p>`;
						}
					}

					class B extends C
					{
						render()
						{
							return `<p>Bar</p>`;
						}

					}

					class A extends B
					{
						render()
						{
							return `<p>Hello world!</p>`;
						}
					}

					this.sinon.spy(A.prototype, 'render');
					this.sinon.spy(B.prototype, 'render');
					this.sinon.spy(C.prototype, 'render');

					let instance = new A;
					
					jsx(`<A />`, scratch, { A: instance });

					this.expect(A.prototype.render).to.have.been.calledOnce;

					this.expect(B.prototype.render).to.not.be.called;

					this.expect(C.prototype.render).to.not.be.called;

					this.expect(scratch.innerHTML).to.equal('<p>Hello world!</p>');
				});
				
			});
			
			describe('children', () =>
			{
				let getMixedArray = () => [ 0, 'a', 'b', '<span>c</span>', null, undefined, false, ['e', 'f'], 1];

				let mixedArrayHTML = '0ab<span>c</span>ef1';

				let ChildFunc = props => '<div><span>foo</span></div>';

				let ChildFuncProps = props => '<div>{props.children}</div>';

				let ChildFuncArray = props => getMixedArray();

				it('should render html children', () =>
				{
					jsx(`<ChildFunc />`, scratch, { ChildFunc });

					this.expect(scratch.innerHTML).to.equal('<div><span>foo</span></div>');
				});

				it('should pass through html children', () =>
				{
					jsx(`<ChildFuncProps><span>foo</span></ChildFuncProps>`, scratch, { ChildFuncProps });

					this.expect(scratch.innerHTML).to.equal('<div><span>foo</span></div>');
				});

				it('should render array children', () =>
				{
					jsx(`<div>{ getMixedArray() }</div>`, scratch, { getMixedArray });

					this.expect(scratch.firstChild.innerHTML).to.equal(mixedArrayHTML);
				});

				it('should render html children when array returned', () =>
				{
					jsx(`<ChildFuncArray />`, scratch, { ChildFuncArray });

					this.expect(scratch.innerHTML).to.equal(mixedArrayHTML);
				});

				it('should render Fragment array children', () =>
				{
					let Foo = () => `<Fragment>{ getMixedArray() }</Fragment>`;

					Foo.getMixedArray = getMixedArray;

					jsx(`<Foo />`, scratch, { Foo });

					this.expect(scratch.innerHTML).to.equal(mixedArrayHTML);
				});

				it('should render array map children on component', () =>
				{
					let MapComponent = () => `<span>{[1,2,3].map(i => <div>{i}</div>)}</span>`;

					jsx(`<MapComponent />`, scratch, { MapComponent });

					this.expect(scratch.innerHTML).to.equal('<span><div>1</div><div>2</div><div>3</div></span>');
				});

				it('should render sibling array children', () =>
				{
					let Todo = () => (`
						<ul>
							<li>A header</li>
							{ ['a', 'b'].map(v => <li>{v}</li>) }
							<li>A divider</li>
							{ ['c', 'd'].map(v => <li>{v}</li>) }
							<li>A footer</li>
						</ul>
					`);

					jsx(`<Todo />`, scratch, { Todo });

					let ul = scratch.children[0];

					this.expect(ul.children.length).to.equal(7);
					this.expect(ul.children[0].textContent).to.equal('A header');
					this.expect(ul.children[1].textContent).to.equal('a');
					this.expect(ul.children[2].textContent).to.equal('b');
					this.expect(ul.children[3].textContent).to.equal('A divider');
					this.expect(ul.children[4].textContent).to.equal('c');
					this.expect(ul.children[5].textContent).to.equal('d');
					this.expect(ul.children[6].textContent).to.equal('A footer');
				});

			});

			describe('props.children', () =>
			{
				let tempChildren;

				let childrenArr =  ['<span class="bar">bar</span>', '123', 456];

				let getMixedArray = () => [ 0, 'a', 'b', '<span>c</span>', null, undefined, false, ['e', 'f'], 1];

				let mixedArrayHTML = '0ab<span>c</span>ef1';

				let ChildrenFunc = props =>
				{
					tempChildren = props.children;

					return `<div>{props.children}</div>`;
				}

				beforeEach(() => tempChildren = false);

				it('should support passing children as a prop', () =>
				{
					jsx(`<ChildrenFunc { { a: 'b', children: ['<span class="bar">bar</span>', '123', 456] } } />`, scratch, { ChildrenFunc });

					this.expect(scratch.innerHTML).to.equal('<div><span class="bar">bar</span>123456</div>');
				});

				it('should be ignored when explicit children exist', () =>
				{
					let Foo = props => `<div {...props}>a</div>`;

					jsx(`<Foo children={'b'} />`, scratch, { Foo });

					this.expect(scratch.innerHTML).to.equal('<div>a</div>');
				});

				it('should be empty array with no child', () =>
				{
					jsx(`<ChildrenFunc />`, scratch, { ChildrenFunc });
					
					this.expect(tempChildren).to.deep.equal([]);
					
					this.expect(scratch.innerHTML).to.equal('<div></div>');
				});

				it('should be empty array with null as a child', () =>
				{
					jsx(`<ChildrenFunc {{ children: null }} />`, scratch, { ChildrenFunc });

					this.expect(tempChildren).to.deep.equal([]);
					
					this.expect(scratch.innerHTML).to.equal('<div></div>');
				});

				it('should be empty array with false as a child', () =>
				{
					jsx(`<ChildrenFunc {{ children: false }} />`, scratch, { ChildrenFunc });

					this.expect(tempChildren).to.deep.equal([]);
					
					this.expect(scratch.innerHTML).to.equal('<div></div>');
				});

				it('should be array with true as a child', () =>
				{
					jsx(`<ChildrenFunc {{ children: true }} />`, scratch, { ChildrenFunc });
					
					this.expect(tempChildren).to.be.an('array');
					this.expect(tempChildren[0].nodeValue).to.equal('true');

					this.expect(scratch.innerHTML).to.equal('<div>true</div>');
				});

				it('should be an array with multiple children', () =>
				{
					jsx(`<ChildrenFunc>
							0<span />
							<input />
							<div />1
						</ChildrenFunc>`, scratch, { ChildrenFunc });

					this.expect(tempChildren).to.be.an('array');
					this.expect(tempChildren[0].nodeValue).to.equal('0');
					this.expect(tempChildren[1].tagName.toLowerCase()).to.equal('span');
					this.expect(tempChildren[2].tagName.toLowerCase()).to.equal('input');
					this.expect(tempChildren[3].tagName.toLowerCase()).to.equal('div');
					this.expect(tempChildren[4].nodeValue).to.equal('1');
					this.expect(scratch.innerHTML).to.equal(
						`<div>0<span></span><input><div></div>1</div>`
					);
				});

				it('should be an array with an array as children', () =>
				{
					let mixedArray = getMixedArray();

					jsx(`<ChildrenFunc>{mixedArray}</ChildrenFunc>`, scratch, { ChildrenFunc, mixedArray });

					this.expect(tempChildren).to.be.an('array');
					this.expect(tempChildren[0].nodeValue).to.equal('0');
					this.expect(tempChildren[1].nodeValue).to.equal('a');
					this.expect(tempChildren[2].nodeValue).to.equal('b');
					this.expect(tempChildren[3].tagName.toLowerCase()).to.equal('span');
					this.expect(tempChildren[3].innerHTML).to.equal('c');
					this.expect(tempChildren[4].nodeValue).to.equal('e');
					this.expect(tempChildren[5].nodeValue).to.equal('f');
					this.expect(tempChildren[6].nodeValue).to.equal('1');

					this.expect(scratch.innerHTML).to.equal(`<div>${mixedArrayHTML}</div>`);
				});

				it('should flatten nested arrays', () =>
				{
					let list1 = [0, 1, [2, 3]];

					jsx(`<ChildrenFunc>{list1}</ChildrenFunc>`, scratch, { ChildrenFunc, list1 } );

					this.expect(tempChildren).to.be.an('array');
					this.expect(tempChildren.length).to.be.equal(4);
					this.expect(scratch.innerHTML).to.equal('<div>0123</div>');
				});

				it('should flatten sibling arrays', () =>
				{
					let list1 = [0, 1];
					let list2 = [2, 3];
					let list3 = [4, 5];
					let list4 = [6, 7];
					let list5 = [8, 9];

					jsx(`
						<ChildrenFunc>
							{[list1, list2]}
							{[list3, list4]}
							{list5}
						</ChildrenFunc>`, scratch, { ChildrenFunc, list1, list2, list3, list4, list5 } 
					);

					this.expect(tempChildren).to.be.an('array');
					this.expect(tempChildren.length).to.be.equal(10);
					this.expect(scratch.innerHTML).to.equal('<div>0123456789</div>');
				});
			});

			describe('component nesting', () =>
			{
				it('should render nested class components', () =>
				{
					class B
					{
						render(props)
						{
							return `<div>{props.foo}</div>`;
						}
					}

					class A
					{
						render(props)
						{
							return `<B foo="bar"/>`;
						}
					}
					
					A.prototype.B = B;

					jsx(`<A />`, scratch, { A });
					
					this.expect(scratch.innerHTML).to.equal('<div>bar</div>');
				});


				it('should render nested functional components', () =>
				{
					let B = props => `<div>{props.foo}</div>`;
				
					let A = props =>  `<B foo="bar"/>`;
					
					A.B = B;

					jsx(`<A />`, scratch, { A });
					
					this.expect(scratch.innerHTML).to.equal('<div>bar</div>');
				});

				it('should wrap nested components', () =>
				{
					let B = props => `<div>{props.foo}</div>`;
				
					let A = props => `<span><B foo="bar"/></span>`;
					
					A.B = B;

					jsx(`<A />`, scratch, { A });
					
					this.expect(scratch.innerHTML).to.equal('<span><div>bar</div></span>');
				});

			});
		});
	}
}

let test = new Test();

test.run();
