import TestCase from '../../../testcase.js';

class Test extends TestCase
{
    run()
    {
        describe('form_values()', () =>
        {
            const [form_values] = frontbx.import(['form_values']).from('_');

            let scratch;
            
            beforeEach(() => scratch = this.setupScratch());

            afterEach(() => this.teardown(scratch));

            let result =
            {
                text: '1',
                number: 1,
                range: 5,
                checkbox: true,
                checkbox_unchecked: false,
                radio: 'radio_2',
                textarea: 'Hello world',
                select: 'bar',
                list: [ 'item 1', 'item 2', 'item 3' ]
            };

            it('should generate form values', () =>
            {        
                scratch.innerHTML = `
                    <form>
                        <input type="text" id="text" value="1" name="text">
                        <input type="number" id="number" value="1" name="number">
                        <input type="range" name="range" min="0" max="10" value="5" step="1">
                        
                        <input type="checkbox" name="checkbox" id="checkbox" checked>
                        <input type="checkbox" name="checkbox_unchecked" id="checkbox_unchecked">

                        <input type="radio" name="radio" id="radio_1" value="radio_1" >
                        <input type="radio" name="radio" id="radio_2" value="radio_2" checked>

                        <textarea id="textarea" name="textarea">Hello world</textarea>

                        <select id="select" name="select">
                            <option value="foo"></option>
                            <option value="bar" selected>2</option>
                        </select>

                        <input type="text" id="list" name="list[]" value="item 1">
                        <input type="text" id="list" name="list[]" value="item 2">
                        <input type="text" id="list" name="list[]" value="item 3">

                    </form>
                `;

                this.expect(form_values(scratch)).to.deep.equal(result);
            });
        });
    }
}

let test = new Test();

test.run();

