import TestCase from '../../../testcase.js';

class Test extends TestCase
{
   run()
   {
        describe('class_names()', () =>
        {
            const [class_names] = frontbx.import(['class_names']).from('_');

            let scratch;
            
            beforeEach(() =>
            {
                scratch = this.setupScratch();
            });

            afterEach(() =>
            {
                this.teardown(scratch);
            });

            it('should return single class', () =>
            {
                scratch.className = 'foo';
                
                this.expect(class_names(scratch)).to.deep.equal(['foo']);
            });

            it('should return multiple classes', () =>
            {
                scratch.className = 'foo bar';
                
                this.expect(class_names(scratch)).to.deep.equal(['foo', 'bar']);
            });

            it('should return no classes', () =>
            {
                this.expect(class_names(scratch)).to.deep.equal([]);
            });

        });
    }
}

let test = new Test();

test.run();