import TestCase from '../../../testcase.js';

class Test extends TestCase
{
    run()
    {
        describe('remove_from_dom()', () =>
        {
            const [remove_from_dom] = frontbx.import(['remove_from_dom']).from('_');

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

                this.expect(remove_from_dom(scratch).length).to.equal(4);
            });
        });
    }
}

let test = new Test();

test.run();


/**
 * Remove an element from the DOM
 *
 * This function also removes all attached event listeners
 * 
 * @access {public}
 * @param  {DOMElement}   el Target element
 */
_.prototype.remove_from_dom = function(el)
{
    if (this.is_array(el))
    {
        return this.each(el, (i, DOMElement) => this.remove_from_dom(DOMElement));
    }

    if (this.in_dom(el))
    {
        el.parentNode.removeChild(el);

        var children = this.find_all('*', el).reverse();

        for (var i = 0, len = children.length; i < len; i++)
        {
            this.off(children[i]);

            this.trigger_event(children[i], `frontbx:dom:remove`);
        }

        this.off(el);

        this.trigger_event(el, `frontbx:dom:remove`);

        this.trigger_event(window, `frontbx:dom:remove`, { DOMElement: el });
    }
}