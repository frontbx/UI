import TestCase from '../../../testcase.js';

class Test extends TestCase
{
    run()
    {
        describe('dom_element()', () =>
        {
            const [dom_element] = frontbx.import(['dom_element']).from('_');

            let scratch;
            
            beforeEach(() => scratch = this.setupScratch());

            afterEach(() => this.teardown(scratch));

            it('should create single element', () =>
            {        
                this.expect(this.serializeHtml(dom_element({tag: 'span'}))).to.equal('<span></span>');
            });

            it('should render attributes', () =>
            {        
                this.expect(this.serializeHtml(dom_element({tag: 'span', class: 'foo', id: 'bar'}))).to.equal('<span class="foo" id="bar"></span>');
            });

            it('should render camelCase attributes', () =>
            {        
                this.expect(this.serializeHtml(dom_element({tag: 'span', dataFoo: 'foo', ariaFoo: 'bar'}))).to.equal('<span aria-foo="bar" data-foo="foo"></span>');
            });

            it('should render style attributes', () =>
            {        
                this.expect(this.serializeHtml(dom_element({tag: 'span', style: 'color:red'}))).to.equal('<span style="color: red;"></span>');

                this.expect(this.serializeHtml(dom_element({tag: 'span', style: {color: 'purple'}}))).to.equal('<span style="color: purple;"></span>');
            });

            it('should render boolean attributes', () =>
            {        
                this.expect(this.serializeHtml(dom_element({tag: 'input', disabled: 'true'}))).to.equal('<input disabled>');
            });

            it('should append child', () =>
            {        
                dom_element({tag: 'span'}, scratch);

                this.expect(this.serializeHtml(scratch)).to.equal('<div id="scratch"><span></span></div>');
            });

            it('should append string children', () =>
            {        
                this.expect(this.serializeHtml(dom_element({tag: 'span'}, null, 'foo'))).to.equal('<span>foo</span>');
            });

            it('should append arrays', () =>
            {        
                this.expect(this.serializeHtml(dom_element({tag: 'span'}, null, ['foo', 'bar']))).to.equal('<span>foobar</span>');
            });

            it('should append mixed arrays', () =>
            {        
                let childrenArr =  ['<span class="bar">bar</span>', '123', 456];

                this.expect(this.serializeHtml(dom_element({tag: 'div'}, null, childrenArr))).to.equal('<div><span class="bar">bar</span>123456</div>');
            });

            it('should append dom elements', () =>
            {        
                let child = dom_element({tag: 'span'}, null, 'foo');

                this.expect(this.serializeHtml(dom_element({tag: 'span'}, null, child))).to.equal('<span><span>foo</span></span>');
            });
            
        });
    }
}

let test = new Test();

test.run();
