import TestCase from '../../../testcase.js';

class Test extends TestCase
{
    run()
    {
        describe('scroll_pos()', () =>
        {
            const [scroll_pos] = frontbx.import(['scroll_pos']).from('_');

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

                this.expect(scroll_pos(scratch).length).to.equal(4);
            });
        });
    }
}

let test = new Test();

test.run();


/**
 * Get the current document scroll position
 *
 * @access {private}
 * @return {obj}
 */
_.prototype.scroll_pos = function(context)
{
    if (context && this.is_htmlElement(context))
    {
        return {
            top: context.scrollTop,
            left: context.scrollLeft
        };
    }

    var doc  = document.documentElement;
    var top  = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    
    return {
        top: top,
        left: left
    };
}