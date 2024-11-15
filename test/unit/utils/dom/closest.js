import TestCase from '../../../testcase.js';

class Test extends TestCase
{
    makeTestDom()
    {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let a  = document.createElement('a');

        ul.className = 'list list-class';

        li.className = 'item item-class';

        a.className = 'link link-class';

        ul.appendChild(li); li.append(a);

        return ul;
    }

    run()
    {
        describe('closest()', () =>
        {
            const [closest] = frontbx.import(['closest']).from('_');

            let scratch;
            let target;
            
            beforeEach(() =>
            {
                scratch = this.setupScratch(this.makeTestDom());
                target = scratch.querySelector('a');

            });

            afterEach(() =>
            {
                this.teardown(scratch);
            });

            it('should find parents by tag', () =>
            {                
                this.expect(closest(target, 'a')).to.equal(target);

                this.expect(closest(target, 'li')).to.equal(target.parentNode);

                this.expect(closest(target, 'ul')).to.equal(target.parentNode.parentNode);

                this.expect(closest(target, 'div')).to.equal(scratch);
            });

            it('should find parents by single class', () =>
            {                
                this.expect(closest(target, '.link')).to.equal(target);

                this.expect(closest(target, '.item')).to.equal(target.parentNode);

                this.expect(closest(target, '.list')).to.equal(target.parentNode.parentNode);
            });

            it('should find parents by multiple optional classes', () =>
            {                
                this.expect(closest(target, ['.foo', '.link'])).to.equal(target);

                this.expect(closest(target, ['.foo', '.item'])).to.equal(target.parentNode);

                this.expect(closest(target, ['.foo', '.list'])).to.equal(target.parentNode.parentNode);
            });

            it('should find parents by multiple classes or tags', () =>
            {                
                this.expect(closest(target, ['.foo', 'a'])).to.equal(target);

                this.expect(closest(target, ['.foo', 'li'])).to.equal(target.parentNode);

                this.expect(closest(target, ['.foo', 'ul'])).to.equal(target.parentNode.parentNode);

                this.expect(closest(target, ['.foobar', 'div'])).to.equal(scratch);
            });

            it('should find parents by multiple explicit classes', () =>
            {                
                this.expect(closest(target, '.link.link-class')).to.equal(target);

                this.expect(closest(target, '.item.item-class')).to.equal(target.parentNode);

                this.expect(closest(target, '.list.list-class')).to.equal(target.parentNode.parentNode);
            });

            it('should not find parents by multiple classes', () =>
            {                
                this.expect(closest(target, '.link.link-class.bar')).to.equal(false);

                this.expect(closest(target, '.item.item-class.bar')).to.equal(false);

                this.expect(closest(target, '.list.list-class.bar')).to.equal(false);
            });
        });
    }
}

let test = new Test();

test.run();

