(function()
{
    /**
     * Helper functions
     * 
     * @var {Function}
     */
    const [find_all, add_class, attr, bool, closest, each, form_inputs, form_values, on, off, input_value, is_callable, is_empty, remove_class] = FrontBx.import(['find_all','add_class','attr','bool','closest','each','form_inputs','form_values','on','off','input_value','is_callable','is_empty','remove_class']).from('_');

    /**
     * Validator functions
     *
     * @access {private}
     * @return {boolean}
     */
    const VALIDATORS = 
    {
        specialchars: ['!', '"', '`', '#', '$', '%', '&', '\'', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'],

        email: function(value)
        {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(value);
        },
        name: function(value)
        {
            return /[^A-z'\ -'❜]/.test(value) === false;
        },
        password: function(value)
        {   
            if (!VALIDATORS.minlength(value, 6) || !VALIDATORS.maxlength(value, 40)) return false;

            let chars = `${value}`;
            let valid = false;

            each(VALIDATORS.specialchars, (i, char) =>
            {
                if (value.includes(char))
                {
                    valid = true;

                    return false;
                }
            });

            return valid;
        },
        url: function(value)
        {
            re = /^(www\.|[A-z]|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
            return re.test(value);
        },
        alpha: function(value)
        {
            return /[^A-z]/.test(value) === false;
        },
        alphaspace: function(value)
        {
            return /[^A-z ]/.test(value) === false;
        },
        alphanumeric: function(value)
        {
            return /[^A-z0-9]/.test(value) === false;
        },
        alphadash: function(value)
        {
            return /[^A-z-]/.test(value) === false;
        },
        alphadot: function(value)
        {
            return /[^A-z\.]/.test(value) === false;
        },
        alphadashdot: function(value)
        {
            return /[^A-z\.-]/.test(value) === false;
        },
        alphadashes: function(value)
        {
            return /[^A-z-_]/.test(value) === false;
        },
        alphadashesdot: function(value)
        {
            return /[^A-z-_\.]/.test(value) === false;
        },
        alphanumericdash: function(value)
        {
            return /[^A-z0-9-]/.test(value) === false;
        },
        alphanumericdot: function(value)
        {
            return /[^A-z0-9\.]/.test(value) === false;
        },
        alphanumericdashdot: function(value)
        {
            return /[^A-z0-9\.-]/.test(value) === false;
        },
        alphanumericdashesdot: function(value)
        {
            return /[^A-z0-9\._-]/.test(value) === false;
        },
        numeric: function(value)
        {
            return /[^0-9]/.test(value) === false;
        },
        numericdecimal: function(value)
        {
            return /[^0-9\.]/.test(value) === false;
        },
        list: function(value)
        {
            var re = /^[-\w\s]+(?:,[-\w\s]*)*$/;

            return re.test(value);
        },
        creditcard: function(value)
        {
            /*Amex Card: ^3[47][0-9]{13}$
            BCGlobal: ^(6541|6556)[0-9]{12}$
            Carte Blanche Card: ^389[0-9]{11}$
            Diners Club Card: ^3(?:0[0-5]|[68][0-9])[0-9]{11}$
            Discover Card: ^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$
            Insta Payment Card: ^63[7-9][0-9]{13}$
            JCB Card: ^(?:2131|1800|35\d{3})\d{11}$
            KoreanLocalCard: ^9[0-9]{15}$
            Laser Card: ^(6304|6706|6709|6771)[0-9]{12,15}$
            Maestro Card: ^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$
            Mastercard: ^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$
            Solo Card: ^(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}$
            Switch Card: ^(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}$
            Union Pay Card: ^(62[0-9]{14,17})$
            Visa Card: ^4[0-9]{12}(?:[0-9]{3})?$
            Visa Master Card: ^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$*/

            var arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
            var ccNum = String(value).replace(/[- ]/g, '');

            var
                len = ccNum.length,
                bit = 1,
                sum = 0,
                val;

            while (len)
            {
                val = parseInt(ccNum.charAt(--len), 10);
                sum += (bit ^= 1) ? arr[val] : val;
            }

            return sum && sum % 10 === 0;
        },
        minlength: function(value, min)
        {
            value = `${value}`;

            return value.length >= parseInt(min);
        },
        maxlength: function(value, max)
        {
            value = `${value}`;

            return value.length <= parseInt(max);
        }
    };

    /**
     * FormValidator
     *
     * This class is used to validate a form and 
     * also apply and classes to display form results and input errors.
     *
     */
    const FormValidator = function(form)
    {
        // Save inputs
        this._formEl = form;
        this._inputs = form_inputs(form);

        // Defaults
        this._ruleSets = [];
        this._formObj  = {};
        this._valid    = false;

        // Initialize
        this._buildRuleSets();
    }

    /**
     * Validate the form.
     *
     * @access {public}
     * @return {boolean}
     */
    FormValidator.prototype.validate = function()
    {
        // Remove all listeners
        this._unListen();

        // Clear any invalids
        this._clearForm();

        // Validate inputs
        this._validateRuleSets();

        // Show invalid inputs
        each(this._ruleSets, (i, ruleset) =>
        {
            if (!ruleset.valid) this._devalidateField(ruleset.node, ruleset.failClass);
        });

        // Listen to input changes.
        this._listen();

        return this._valid;
    }

    /**
     * Destroy the validator.
     *
     * @access {public}
     */
    FormValidator.prototype.destroy = function()
    {
        this._unListen();

        this._clearForm();

        each(this._ruleSets, (i, ruleset) =>
        {
            this._validateField(ruleset.node, ruleset.failClass);
        });
    }

    /**
     * Show form result
     *
     * @access {public}
     */
    FormValidator.prototype.showResult = function(result)
    {
        this._clearForm();

        add_class(this._formEl, result);
    }

    /**
     * Append a key/pair and return form obj
     *
     * @access {public}
     * @return {obj}
     */
    FormValidator.prototype.append = function(key, value)
    {
        this._formObj[key] = value;

        let form = this.form();

        return {...form, ...this._formObj};
    };

    /**
     * Get the form object
     *
     * @access {public}
     * @return {obj}
     */
    FormValidator.prototype.form = function()
    {
        return form_values(this._formEl);
    }

    /**
     * Build validation rule sets.
     *
     * @access {private}
     */
    FormValidator.prototype._buildRuleSets = function()
    {
        each(this._inputs, (i, input) =>
        {
            // No name or radio
            if (!input.name) return;

            let node = input;

            let required   = bool(attr(input, 'data-js-required') || attr(input, 'required'));
            let minlength  = attr(input, 'data-js-min-length') || attr(input, 'minlength');
            let maxlength  = attr(input, 'data-js-max-length') || attr(input, 'maxlength');
            let valid      = true;
            let validation = this._validationFunc(attr(input, 'data-js-validation'));
            let failClass  = attr(input, 'data-js-validation-fail') || 'danger'; 

            this._ruleSets.push({node, required, minlength, maxlength, validation, failClass, valid});
        });
    }

    /**
     * Returns the validation callback function by name.
     *
     * @access {private}
     * @param  {String}   name Validation name
     * @return {Function}
     */
    FormValidator.prototype._validationFunc = function(name)
    {
        if (!name) return;

        let key = name.replaceAll('-', '').toLowerCase();

        if (!VALIDATORS[key]) throw new error(`Unsupported input validation [${name}].`)

        return VALIDATORS[key];
    }

    /**
     * Validate all rule sets.
     *
     * @access {private}
     * @return {Boolean}
     */
    FormValidator.prototype._validateRuleSets = function()
    {
        this._valid = true;

        each(this._ruleSets, (i, ruleset) => { this._validateRuleSet(ruleset) });
        
        return this._valid;
    }

    /**
     * Validate an individual ruleset.
     *
     * @access {private}
     * @param  {Object}  ruleset Ruleset to validate
     * @return {Boolean}
     */
    FormValidator.prototype._validateRuleSet = function(ruleset)
    {
        let value = input_value(ruleset.node);

        // Skip radios, they don't have any validation
        if (ruleset.node.type === 'radio') return true;
        
        if (ruleset.required && is_empty(value))
        {
            this._valid = false;
            ruleset.valid = false;
        }
        else if (ruleset.minlength && !VALIDATORS.minlength.call(null, value, ruleset.minlength))
        {
            this._valid = false;
            ruleset.valid = false;
        }
        else if (ruleset.maxlength && !VALIDATORS.maxlength.call(null, value, ruleset.maxlength))
        {
            this._valid = false;
            ruleset.valid = false;
        }
        else if (is_callable(ruleset.validation) && !ruleset.validation.call(null, value))
        {
            this._valid = false;
            ruleset.valid = false;
        }
        else
        {
            ruleset.valid = true;
        }

        return ruleset.valid;
    }

    /**
     * Listen to input
     *
     * @access {private}
     * @param  {HTMLElement} node Input
     */
    FormValidator.prototype._listen = function()
    {
        each(this._ruleSets, (i, ruleset) => 
        {
            on(ruleset.node, 'input, change', this._liveValidate, this);
        });
    }

    /**
     * Listen to inputs.
     *
     * @access {private}
     */
    FormValidator.prototype._unListen = function()
    {
        each(this._ruleSets, (i, ruleset) => 
        {
            off(ruleset.node, 'input, change', this._liveValidate, this);
        });
    }

    /**
     * Live validate an input.
     *
     * @access {private}
     * @param  {Object}      e     Event
     * @param  {HTMLElement} input Input
     */
    FormValidator.prototype._liveValidate = function(e, input)
    {
        each(this._ruleSets, (i, ruleset) => 
        {
            if (ruleset.node === input)
            {
                let valid = this._validateRuleSet(ruleset);

                valid ? this._validateField(input, ruleset.failClass) : this._devalidateField(input, ruleset.failClass);
            }
        });
    }

    /**
     * Show form field as valid.
     *
     * @access {private}
     * @param  {HTMLElement} node Input
     */
    FormValidator.prototype._validateField = function(input, failClass)
    {
        let fieldWrap = closest(input, '.form-field');

        if (fieldWrap) remove_class(fieldWrap, ['info', 'success', 'warning', 'danger', failClass]);
    }

    /**
     * Show form field as invalid.
     *
     * @access {private}
     */
    FormValidator.prototype._devalidateField = function(input, failClass)
    {
        let fieldWrap = closest(input, '.form-field');

        if (fieldWrap) add_class(fieldWrap, failClass);
    }

    /**
     * Clear form results.
     *
     * @access {private}
     */
    FormValidator.prototype._clearForm = function()
    {
        // Remove the form result
        remove_class(this._formEl, ['info', 'success', 'warning', 'danger']);
    }

    // Load into container
    FrontBx.set('FormValidator', FormValidator);

})();