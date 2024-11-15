import TestCase from '../../../testcase.js';

class Test extends TestCase
{
   run()
   {
        describe('has_class()', () =>
        {
            let scratch;

            const [has_class] = frontbx.import(['has_class']).from('_');
            
            beforeEach(() =>
            {
                scratch = this.setupScratch();
            });

            afterEach(() =>
            {
                this.teardown(scratch);
            });

            it('should have single class', () =>
            {
                scratch.className = 'foo';
                
                this.expect(has_class(scratch, 'foo')).to.equal(true);
            });

            it('should not have single class', () =>
            {       
                this.expect(has_class(scratch, 'foo')).to.equal(false);
            });

            it('should have single class with multiple classes', () =>
            {
                scratch.className = 'foo bar';
                
                this.expect(has_class(scratch, 'foo')).to.equal(true);
            });

            it('should not have single class with multiple classes', () =>
            {
                scratch.className = 'foo bar';
                
                this.expect(has_class(scratch, 'baz')).to.equal(false);
            });

            it('should have multiple classes', () =>
            {       
                scratch.className = 'foo bar baz';
                
                this.expect(has_class(scratch, 'foo, bar')).to.equal(true);
            });

            it('should have one of multiple classes', () =>
            {       
                scratch.className = 'foo foobar';
                
                this.expect(has_class(scratch, 'foo, bar, baz')).to.equal(true);
            });

            it('should not have one of multiple classes', () =>
            {       
                scratch.className = 'foo';
                
                this.expect(has_class(scratch, 'bar, baz')).to.equal(false);
            });

            it('should have class from dot', () =>
            {       
                scratch.className = 'foo bar baz';
                
                this.expect(has_class(scratch, '.foo')).to.equal(true);
            });

            it('should have all classes from dot', () =>
            {       
                scratch.className = 'foo bar baz';
                
                this.expect(has_class(scratch, '.foo.bar')).to.equal(true);
            });

            it('should not have all classes from dot', () =>
            {       
                scratch.className = 'foo bar';
                
                this.expect(has_class(scratch, '.foo.bar.baz')).to.equal(false);
            });
        });
    }
}

let test = new Test();

test.run();
