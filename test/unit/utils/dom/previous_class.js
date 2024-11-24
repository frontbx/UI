import TestCase from '../../../testcase.js';

class Test extends TestCase
{
    run()
    {
        describe('previous_class()', () =>
        {
            const [previous_class] = frontbx.import(['previous_class']).from('_');

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

                this.expect(previous_class(scratch).length).to.equal(4);
            });
        });
    }
}

let test = new Test();

test.run();


/**
 * Traverse previousSibling untill class
 *
 * @access {public}
 * @param  {DOMElement}   el        Target element
 * @param  {string} className Target node classname
 * @return {node\null}
 */
_.prototype.previous_class = function(el, classNames)
{
    let ret = false;

    this.traverse_prev(el, (sibling) =>
    {
        ret = this.has_class(sibling, classNames) ? sibling : ret;
        
        if (ret) return false;
    });

    return ret;
}