import TestCase from '../../../testcase.js';

class Test extends TestCase
{
   run()
   {
        describe('remove_class()', () =>
        {
            const [remove_class] = frontbx.import(['remove_class']).from('_');

            let scratch;
            
            beforeEach(() =>
            {
                scratch = this.setupScratch();
            });

            afterEach(() =>
            {
                this.teardown(scratch);
            });

            it('should remove single class', () =>
            {
                scratch.className = 'foo';

                remove_class(scratch, 'foo');
                
                this.expect(scratch.className).to.equal('');
            });

            it('should not remove single class', () =>
            {       
                scratch.className = 'bar';

                remove_class(scratch, 'foo');

                this.expect(scratch.className).to.equal('bar');
            });

            it('should remove single class with multiple classes', () =>
            {
                scratch.className = 'foo bar';

                remove_class(scratch, 'foo');
                
                this.expect(scratch.className).to.equal('bar');
            });

            it('should not have single class with multiple classes', () =>
            {
                scratch.className = 'foo bar';

                remove_class(scratch, 'baz');
                
                this.expect(scratch.className).to.equal('foo bar');
            });

            it('should remove multiple classes', () =>
            {       
                scratch.className = 'foo bar baz';

                remove_class(scratch, 'foo, bar');
                
                this.expect(scratch.className).to.equal('baz');
            });

            it('should remove multiple classes from array', () =>
            {       
                scratch.className = 'foo bar baz';

                remove_class(scratch, ['foo', 'bar']);
                
                this.expect(scratch.className).to.equal('baz');
            });

            it('should not remove multiple classes from array', () =>
            {       
                scratch.className = 'foo bar baz';

                remove_class(scratch, ['foo', 'bar', 'foobaz']);
                
                this.expect(scratch.className).to.equal('baz');
            });

            it('should removed class from dot', () =>
            {       
                scratch.className = 'foo bar';

                remove_class(scratch, '.foo');
                
                this.expect(scratch.className).to.equal('bar');
            });

            it('should remove multiple classes from dot', () =>
            {       
                scratch.className = 'foo bar baz';

                remove_class(scratch, '.foo.bar');
                
                this.expect(scratch.className).to.equal('baz');
            });
        });
    }
}

let test = new Test();

test.run();

