import TestCase from '../../../testcase.js';

class Test extends TestCase
{
    run()
    {
        describe('form_inputs()', () =>
        {
            const [form_inputs] = frontbx.import(['form_inputs']).from('_');

            let scratch;
            
            beforeEach(() => scratch = this.setupScratch());

            afterEach(() => this.teardown(scratch));

            it('should find form inputs', () =>
            {        
                scratch.innerHTML = `
                    <form>
                        <input type="text" id="foo" value="1">
                        <input type="number" id="foo" value="1">
                        <input type="range" min="0" max="10" value="5" step="1">
                        <input type="checkbox" name="checkbox_1" id="checkbox_1">

                        <input type="radio" name="radio_1" id="radio_1" >
                        <input type="radio" name="radio_1" id="radio_2" checked>
                        <textarea id="textarea" name="textarea"></textarea>
                        <select id="select" name="select">
                            <option value="1" name="1"></option>
                        </select>
                    </form>
                `;

                this.expect(form_inputs(scratch).length).to.equal(8);
            });
        });
    }
}

let test = new Test();

test.run();
