import TestCase from '../../../testcase.js';

class Test extends TestCase
{
    run()
    {
        describe('toggle_class()', () =>
        {
            const [toggle_class] = frontbx.import(['toggle_class']).from('_');

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

                this.expect(toggle_class(scratch).length).to.equal(4);
            });
        });
    }
}

let test = new Test();

test.run();


/**
 * Toogle a classname
 *
 * @access {public}
 * @param  {DOMElement}         el         Target element
 * @param  {string}       className  Class name to toggle
 */
_.prototype.toggle_class = function(DOMElement, className)
{    
    if (this.has_class(DOMElement, className))
    {
        this.remove_class(DOMElement, className);
    }
    else
    {
        this.add_class(DOMElement, className);
    }
}