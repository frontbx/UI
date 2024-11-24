import TestCase from '../../../testcase.js';

class Test extends TestCase
{
    run()
    {
        describe('in_viewport()', () =>
        {
            const [in_viewport] = frontbx.import(['in_viewport']).from('_');

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

                this.expect(in_viewport(scratch).length).to.equal(4);
            });
        });
    }
}

let test = new Test();

test.run();

/**
 * Check if an element is in current viewport
 *
 * @access {public}
 * @param  {DOMElement}   el Target DOM node
 * @return {bool}
 */
_.prototype.in_viewport = function(el)
{
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or find(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or find(window).width() */
    );
}