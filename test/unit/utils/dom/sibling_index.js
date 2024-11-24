import TestCase from '../../../testcase.js';

class Test extends TestCase
{
    run()
    {
        describe('sibling_index()', () =>
        {
            const [sibling_index] = frontbx.import(['sibling_index']).from('_');

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

                this.expect(sibling_index(scratch).length).to.equal(4);
            });
        });
    }
}

let test = new Test();

test.run();


/**
 * Returns nth position from siblings
 *
 * @access {public}
 * @param  {DOMElement}   el   Target element
 * @return {node\null}
 */
_.prototype.sibling_index = function(DOMElement)
{
    let children = this.first_children(DOMElement.parentNode);

    for (var i = 0; i < children.length; i++)
    {
        if (children[i] === DOMElement) return i;
    }

    return 0;
}