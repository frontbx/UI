(function()
{    
    /**
     * Helpers.
     *
     * @var  {Function}
     */
    const [map, each, object_props, clone_deep] = frontbx.import(['map','each','object_props','clone_deep']).from('_');

    // Produce the code to shadow all globals in the environment
    // through lexical binding.
    // See also var `builtins`.
    const BUILT_INS_STR =
    [
        'JSON',
        'Object',
        'Function',
        'Array',
        'String',
        'Boolean',
        'Number',
        'Date',
        'RegExp',
        'Error',
        'EvalError',
        'RangeError',
        'ReferenceError',
        'SyntaxError',
        'TypeError',
        'URIError'
    ];

    const DISSALOWEDES =
    {
        // disallowed
        global: undefined,
        process: undefined,
        module: undefined,
        require: undefined,
        document: undefined,
        window: undefined,
        Window: undefined,
        // no evil...
        eval: undefined,
        Function: undefined
    };

    // Variable identifiers
    const IDENTIFIER = /^[$_a-zA-Z][$_a-zA-Z0-9]*$/;

    // Keep in store all real builtin prototypes to restore them after
    // a possible alteration during the evaluation.
    const BUILT_INS  = [JSON, Object, Function, Array, String, Boolean, Number, Date, RegExp, Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError];
    const COPIES     = new Array(BUILT_INS.length);
    const PROTO_KEYS = map(new Array(BUILT_INS.length), (i) => object_props(BUILT_INS[i], true));

    const acceptableVariable = function(v)
    {
        return !RESERVED_WORDS.includes(v) && IDENTIFIER.test(v);
    }

    const resetEnv = function()
    {
        let resets = map(object_props(window || global, true), (i, v) => acceptableVariable(v) ? v : false);

        return `var ${resets.join(',')}, undefined;`;
    }

    // Fake all builtins' prototypes.
    const alienate = function()
    {
        each(BUILT_INS_STR, (i) => typeof COPIES[i] === 'undefined' ? COPIES[i] = clone_deep(BUILT_INS[i]) : null);
    }

    // Restore all builtins' prototypes.
    const unalienate = function()
    {
        let g = window || global;

        each(BUILT_INS_STR, (i, name) =>
        {
            // Reset global
            g[name] = BUILT_INS[i];

            // Delete altered prototypes
            let realKeys = PROTO_KEYS[i];
            let currKeys = object_props(BUILT_INS[i], true);
            let diff     = currKeys.filter(x => !realKeys.includes(x));

            if (diff.length >= 1) each(diff, (i, key) => BUILT_INS[i][key] = undefined);
        });
    }

    const genBindings = function(bindings)
    {
        // Sanitize bindings
        bindings = map(bindings, (k, v) => acceptableVariable(k) ? v : false);

        // Add in default built in protos
        each(BUILT_INS_STR, (i, name) => bindings[name] = COPIES[i]);

        // Merge with GLOBALS and DISSALOWEDES
        return {...bindings, ...DISSALOWEDES}; 
    }

    const SANDBOX_NAME = '$sandbox$';

    // Evaluate code as a String (`source`) without letting global variables get
    // used or modified. The `sandbox` is an object containing variables we want
    // to pass in.
    sandbox = function(source, bindings, context)
    { 
        alienate();

        bindings = genBindings(bindings || {});

        context = context || null;

        let sandboxed = 'this.constructor.constructor = function () {};\nvar ';

        each(bindings, (key, value) => sandboxed += `${key} = ${SANDBOX_NAME}['${key}'],\n`);

        sandboxed += `undefined;\n${resetEnv()}\n return ${source};`;

        let ret;

        ret = Function(SANDBOX_NAME, sandboxed).call(context, bindings);

        unalienate();

        return ret;
    }

})();