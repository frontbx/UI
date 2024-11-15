import TestCase from '../../../testcase.js';

class Test extends TestCase
{
   run()
   {
        describe('add_class()', () =>
        {
            const [add_class] = frontbx.import(['add_class']).from('_');

            let scratch;
            
            beforeEach(() =>
            {
                scratch = this.setupScratch();
            });

            afterEach(() =>
            {
                this.teardown(scratch);
            });

            it('should add single class', () =>
            {
                add_class(scratch, 'foo');
                
                this.expect(scratch.className).to.equal('foo');
            });

            it('should add multiple classes with commas', () =>
            {
                add_class(scratch, 'foo, bar');
                
                this.expect(scratch.className).to.equal('foo bar');
            });

            it('should add class from array', () =>
            {
                add_class(scratch, ['foo']);
                
                this.expect(scratch.className).to.equal('foo');
            });

            it('should add multiple classes from array', () =>
            {
                add_class(scratch, ['foo', 'bar']);
                
                this.expect(scratch.className).to.equal('foo bar');
            }); 
        });
    }
}

let test = new Test();

test.run();