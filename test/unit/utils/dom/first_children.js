import TestCase from '../../../testcase.js';

class Test extends TestCase
{
    run()
    {
        describe('first_children()', () =>
        {
            const [first_children] = frontbx.import(['first_children']).from('_');

            let scratch;
            
            beforeEach(() => scratch = this.setupScratch());

            it('should find first children', () =>
            {        
                scratch.innerHTML = `
                    <div>1</div>
                    <span>2</span>
                    <div><span>3</span></div>
                    <i>5</i>
                `;

                this.expect(first_children(scratch).length).to.equal(4);
            });
        });
    }
}

let test = new Test();

test.run();
