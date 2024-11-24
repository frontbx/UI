import TestCase from '../../../testcase.js';

class Test extends TestCase
{
    run()
    {
        describe('width()', () =>
        {
            const [width] = frontbx.import(['width']).from('_');

            let scratch;
            
            beforeEach(() => scratch = this.setupScratch());

            afterEach(() => this.teardown(scratch));

            it('should find first children', () =>
            {        
                scratch.innerHTML = `
                    <div>1</div>
                    <span>2</span>
                    <div>
                        <span>3</span>
                    </div>
                    <i>5</i>
                `;

                this.expect(width(scratch).length).to.equal(4);
            });
        });
    }
}

let test = new Test();

test.run();

/**
 * Get an element's actual width in px
 *
 * @access {public}
 * @param  {DOMElement}   DOMElement Target element
 * @return {object}
 */
_.prototype.width = function(DOMElement, borderBox)
{
	if (DOMElement === window || DOMElement === document || DOMElement === document.documentElement ) return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

	if (borderBox)
    {
        let w    = parseInt(this.rendered_style(DOMElement, 'width'));
        let padL = parseInt(this.rendered_style(DOMElement, 'padding-left'));
        let padR = parseInt(this.rendered_style(DOMElement, 'padding-right'));

        return parseInt(w - padL - padR);
    }

    return this.css_unit_value(this.rendered_style(DOMElement, 'width'));
}