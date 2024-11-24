import TestCase from '../../../testcase.js';

class Test extends TestCase
{
    run()
    {
        describe('previous()', () =>
        {
            const [previous] = frontbx.import(['previous']).from('_');

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

                this.expect(previous(scratch).length).to.equal(4);
            });
        });
    }
}

let test = new Test();

test.run();


/**
 * Traverse previousSibling untill type
 *
 * @access {public}
 * @param  {DOMElement}   el   Target element
 * @param  {string} type Target node type
 * @return {node\null}
 */
_.prototype.previous = function(el, type)
{
    // Match OR split by comma
    if (this.is_string(type) && type.includes(',')) type = type.split(',').filter((x) => x.trim() !== '').map((x) => x.trim());

    // Match OR as an array
    if (this.is_array(type))
    {        
        let ret = false;

        this.each(type, (i , itype) =>
        {
            ret = this.previous(el, itype);

            if (ret) return false;
        });

        return ret;
    }
    
    let isElement = this.is_htmlElement(type);
    let isClass   = !isElement && type.includes('.');
    let isType    = !isElement && !isClass;
    let ret       = false;

    this.traverse_prev(el, (sibling, pType) =>
    {
        if (isElement && sibling === type)
        {
            ret = sibling;

            return false;
        }
        else if (isClass && this.has_class(sibling, type))
        {
            ret = sibling;

            return false;
        }
        else if (isType && type === pType)
        {
            ret = sibling;

            return false;
        }
    });

    return ret;
}