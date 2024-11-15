import TestCase from '../../../testcase.js';

class Test extends TestCase
{
    makeTestDom()
    {
        let div = this.setupScratch();

        div.style.width    = '300px';
        div.style.height   = '300px';
        div.style.position = 'absolute';
        div.style.top      = '0px';
        div.style.left     = '0px';

        return div;
    }

    run()
    {
        describe('coordinates()', () =>
        {
            const [coordinates] = frontbx.import(['coordinates']).from('_');

            let scratch;
            
            beforeEach(() => scratch = this.makeTestDom());

            afterEach(() => this.teardown(scratch));

            it('should gen absolute coordinates', () =>
            {        
                this.expect(coordinates(scratch)).to.deep.equal({ top: 0, left: 0, right: 300, bottom: 300, height: 300, width: 300 });
            });

            it('should gen relative coordinates', () =>
            {        
                scratch.style.position = 'relative';

                this.expect(coordinates(scratch)).to.deep.equal({ top: 0, left: 0, right: 300, bottom: 300, height: 300, width: 300 });
            });

            it('should gen coordinates of hidden elements', () =>
            {        
                scratch.style.display = 'none';
                
                this.expect(coordinates(scratch)).to.deep.equal({ top: 0, left: 0, right: 300, bottom: 300, height: 300, width: 300 });

                this.expect(scratch.style.display).to.equal('none');
            });
        });
    }
}

let test = new Test();

test.run();