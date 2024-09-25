# Form Validation

---

Frontbx's `FormValidator` provides a powerful component to easily validate forms.

---

*   [Instantiation](#Instantiation)
*   [Markup](#markup)
*   [Validating](#validating)
*   [Example](#example)

---

### Instantiation

The `FormValidator` can be accessed through Frontbx's `Container`, providing your target `<form>` DOMElement as a parameter.

```javascript
const validator = frontbx.FormValidator(document.querySelector.$('#myform'));
```

---

### Markup

To setup a form for validation, use one of the pre-built validation rules as the `data-js-validation` attribute on any input:

```html
<input type="email" name="email" data-js-validation="email">
```

| Rule                    | Description                                                                        |
|-------------------------|------------------------------------------------------------------------------------|
| `email`                 | Validates against a valid email address.                                           |
| `name`                  | Validates against alpha-space characters with addition of `-` `"`, `'` `❜`.        |
| `password`              | Validates against minlength 6, maxlength 40, and inclusive of a special character. |
| `url`                   | Validates against a valid URL.                                                     |
| `alpha`                 | Allows alpha characters.                                                           |
| `alphaspace`            | Allows alpha characters with spaces.                                               |
| `alphanumeric`          | Allows alpha characters with numbers.                                              |
| `alphadash`             | Allows alpha characters with numbers.                                              |
| `alphadot`              | Allows alpha characters with dots.                                                 |
| `alphadashdot`          | Allows alpha characters with hyphens.                                              |
| `alphadashes`           | Allows alpha characters with hyphens and underscores.                              |
| `alphadashesdot`        | Allows alpha characters with hyphens and dots.                                     |
| `alphanumericdash`      | Allows alpha characters, numbers, and hyphens.                                     |
| `alphanumericdot`       | Allows alpha characters, numbers, and dots.                                        |
| `alphanumericdashdot`   | Allows alpha characters, numbers, hyphens and dots.                                |
| `alphanumericdashesdot` | Allows alpha characters, numbers, hyphens, underscores and dots.                   |
| `numeric`               | Allows alpha numbers.                                                              |
| `numericdecimal`        | Allows alpha numbers and dots.                                                     |
| `list`                  | Must be a comma seperated list of characters.                                      |
| `creditcard`            | Validates against a valid credit card                                              |


Additionally, you can validate an input as `required` as well as validate the length of an input by providing the following attributes:

| Attribute           | Description                   |
|---------------------|-------------------------------|
| `data-js-required`  | Value must not be empty       |
| `data-js-minlength` | Validates against `>=` length |
| `data-js-maxlength` | Validates against `<=` length |
| `required`          | Value must not be empty       |
| `minlength`         | Validates against `>=` length |
| `maxlength`         | Validates against `<=` length |


```html
<!-- Data attributes -->
<input type="text" name="name" data-js-required="true" data-js-min-length="5" data-js-max-length="30">

<!-- Native attributes -->
<input type="text" name="name" required="true" minlength="5" maxlength="30">
```

---

### Validating

Instantiate a `FormValidator` instance via Frontbx's `Container`, passing the target `<form>` DOMElement as the parameter.

```javascript
const validator = frontbx.FormValidator(document.querySelector.$('#myform'));
```

The `validate` method will run validation on all inputs based on any validation attributes and return a `Boolean`. Any invalid `.form-field` elements will then be shown as invalid.

```javascript
let valid = validator.validate();

if (valid)
{
    // do stuff
}
```

Additionally, once `validate` is called on a form, any inputs that fail validation will get a listener that listens for any changes and live validates the input whenever its value changes.

> See the [Input states](../../forms/inputs/index.html#states) documentation for details on input states.

The `form` method returns a key/value object of all `input`, `textarea` and `select` elements in the form.

```javascript
let form = validator.form();
```

The `append` method appends a key/value pair to the form object from the `form` and returns it. Useful when you need to add something to an Ajax request like a `CSRF` token.

```javascript
let form = validator.append('secret_key', '$FDS#$T$@');
```

The `showResult` method will add the context class to `<form>`, which in turns displays the appropriate form result:

```javascript
validator.showResult('success');
```

> See the [Form results](../../forms/results/index.html) documentation for details on form result markup.


Finally, the `destroy` method removes any listeners and reverts the form to it's original state.

```javascript
validator.destroy();
```

---

### Example

Below is an example form using the validator. In a real request, you would use Frontbx's `Ajax` component or submit the form manually, however for this example we just use a `timeout`. Check the console log for more details.

<div class="fbx-snippet-demo">
    <form class="flex-row row-gaps-xs align-cols-center">
        <div class="col-12 col-md-8">
			<div class="row pole-xs pole-s">
				<div class="form-field row">
					<input type="text" name="name" id="name" data-js-required="true" data-js-validation="name">
					<label for="name">Name</label>
				</div>
				<p class="help-danger">* That doesn't look right, make sure you enter a valid name.</p>
			</div>
			<div class="row pole-xs pole-s">
				<div class="form-field row">
					<input type="email" name="email" id="email" data-js-required="true" data-js-validation="email">
					<label for="email">Email</label>
				</div>
				<p class="help-danger">* That doesn't look right, make sure you enter a valid email.</p>
			</div>
			<div class="row pole-xs pole-s">
				<div class="form-field row">
					<input type="password" name="password" id="password" data-js-required="true" data-js-validation="password">
					<label for="password">Password</label>
				</div>
				<p class="help-danger">* Passwords must be between 6-40 characters and include a special character.</p>
			</div>
			<div class="row pole-xs pole-s">
				<div class="form-field row">
					<span class="checkbox">
						<input type="checkbox" name="checkbox" id="checkbox" checked="true" />
						<label for="checkbox">Send me free stuff</label>
					</span>
				</div>
			</div>
			<div class="row pole-xs pole-s">
		        <div class="form-field pad-10 pad-r pad-s">
		        	<p class="no-margin">Form result:</p>
		            <span class="radio radio-info">
		                <input type="radio" name="result" id="radio_10" value="info" />
		                <label for="radio_10">Info</label>
		            </span>
		        </div>
		        <div class="form-field pad-10">
		            <span class="radio radio-success">
		                <input type="radio" name="result" id="radio_11" value="success" checked />
		                <label for="radio_11">Success</label>
		            </span>
		        </div>
		        <div class="form-field pad-10">
		            <span class="radio radio-warning">
		                <input type="radio" name="result" id="radio_12" value="warning" />
		                <label for="radio_12">Warning</label>
		            </span>
		        </div>
		        <div class="form-field pad-10">
		            <span class="radio radio-danger">
		                <input type="radio" name="result" id="radio_13" value="danger" />
		                <label for="radio_13">Danger</label>
		            </span>
		        </div>
		    </div>
		    <div class="row pole-xs pole-s">
				<button type="submit" class="btn with-loading js-form-validatior-btn">
					<span class="loader loader-1"></span>
					Submit
				</button>
			</div>
			<div class="form-result">
				<div class="msg msg-info" aria-hidden="true">
		            <div class="msg-icon">
		                <span class="fa fa-bell icon"></span>
		            </div>
		            <div class="msg-body">
		                <p>Please check your email to activate your account</p>
		            </div>
		        </div>
		        <div class="msg msg-success" aria-hidden="true">
		            <div class="msg-icon">
		                <span class="fa fa-check icon"></span>
		            </div>
		            <div class="msg-body">
		                <p>Hooorayy! Your message was successfully sent!</p>
		            </div>
		        </div>
		        <div class="msg msg-warning" aria-hidden="true">
		            <div class="msg-icon">
		                <span class="fa fa-triangle-exclamation icon"></span>
		            </div>
		            <div class="msg-body">
		                <p>There was an unknown error. Please try again later or contact support.</p>
		            </div>
		        </div>
		        <div class="msg msg-danger" aria-hidden="true">
		            <div class="msg-icon">
		                <span class="fa fa-xmark icon"></span>
		            </div>
		            <div class="msg-body">
		                <p>You have been banned from creating an account with us.</p>
		            </div>
		        </div>
			</div>
		</div>
	</form>
</div>


```html
<form id="my-form">

	<!-- name -->
	<div class="row pole-xs pole-s">
		<div class="form-field row">
			<input type="text" name="name" id="name" data-js-required="true" data-js-validation="name">
			<label for="name">Name</label>
		</div>
		<p class="help-danger">* Please enter a valid name.</p>
	</div>

	<!-- Email -->
	<div class="row pole-xs pole-s">
		<div class="form-field row">
			<input type="email" name="email" id="email" data-js-required="true" data-js-validation="email">
			<label for="email">Email</label>
		</div>
		<p class="help-danger">* Please enter a valid email address.</p>
	</div>

	<!-- Password -->
	<div class="row pole-xs pole-s">
		<div class="form-field row">
			<input type="password" name="password" id="password" data-js-required="true" data-js-validation="password">
			<label for="password">Password</label>
		</div>
		<p class="help-danger">* Passwords must include a number or special character.</p>
	</div>

	<!-- Submit -->
	<div class="row pole-xs pole-s">
		<button type="submit" class="btn with-loading js-form-validatior-btn">
			<span class="loader loader-1"></span>
			Submit
		</button>
	</div>
	
	<!-- Results -->
	<div class="form-result">
		<div class="msg msg-info" aria-hidden="true">
            <div class="msg-icon">
                <span class="fa fa-bell icon"></span>
            </div>
            <div class="msg-body">
                <p>Please check your email to activate your account</p>
            </div>
        </div>
        <div class="msg msg-success" aria-hidden="true">
            <div class="msg-icon">
                <span class="fa fa-check icon"></span>
            </div>
            <div class="msg-body">
                <p>Hooorayy! Your message was successfully sent!</p>
            </div>
        </div>
        <div class="msg msg-warning" aria-hidden="true">
            <div class="msg-icon">
                <span class="fa fa-triangle-exclamation icon"></span>
            </div>
            <div class="msg-body">
                <p>There was an unknown error. Please try again later or contact support.</p>
            </div>
        </div>
        <div class="msg msg-danger" aria-hidden="true">
            <div class="msg-icon">
                <span class="fa fa-xmark icon"></span>
            </div>
            <div class="msg-body">
                <p>You have been banned from creating an account with us.</p>
            </div>
        </div>
	</div>

</form>

```

```javascript

/* Helpers */
const [find, has_class, add_class, remove_class, on] = frontbx.import(['find', 'has_class', 'add_class', 'remove_class', 'on']).from('_');

// Instantiate validator and cache vars
const form      = find('#my-form');
const validator = frontbx.FormValidator(form);
const submitBtn = find('button[type=submit]', form);
let fakeAjax;

on(submitBtn, 'click', function(e)
{
    // Don't submit if the form if it is being submitted
    if (has_class(submitBtn, 'active')) return false;

    // Validate the form
    let valid = validator.validate();

    // Clear fake ajax timeout
	clearTimeout(fakeAjax);

    // If validated, submit the form
    if (valid)
    {
    	// Button shown as active
        add_class(submitBtn, 'active');

        // No Ajax?
        // form.submit(); return false;

        // Here you would send a real ajax request
        fakeAjax = setTimeout(() =>
        { 
        	// Usually you would get the result from server here from the Ajax request
        	let result = 'success';

        	// Show 'success', 'info', 'danger' or 'warning' results
            validator.showResult('success');

            // remove btn active
            remove_class(submitBtn, 'active');

        }, 3000);
    }

    // Stop the form from submitting via POST
    return false;
});
```
