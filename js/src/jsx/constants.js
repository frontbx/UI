/**
 * Currently rendering Component.
 *
 * @var  {Osbject}
 */
const CURR_RENDER =
{
    current: null
};

/**
 * Bindings / variable caching.
 *
 * @var  {Osbject}
 */
const BINDINGS_CACHE = {};

// Assume a browser environment.
const RESERVED_WORDS =
[
    'break',
    'do',
    'in',
    'typeof',
    'case',
    'else',
    'instanceof',
    'var',
    'let',
    'catch',
    'export',
    'new',
    'void',
    'class',
    'extends',
    'return',
    'while',
    'const',
    'finally',
    'super',
    'with',
    'continue',
    'for',
    'switch',
    'yield',
    'debugger',
    'function',
    'this',
    'delete',
    'import',
    'try',
    'enum',
    'implements',
    'package',
    'protected',
    'static',
    'interface',
    'private',
    'public',
    'eval',
    'global',
    'process',
    'module',
    'require',
    'document',
    'window',
    'Window',
    'Function',
    'JSON',
    'Object',
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
    'URIError',
    'frontbx',
    'jsx',
    '__defineGetter__',
    '__defineSetter__',
    '__lookupGetter__',
    '__lookupSetter__',
    '__proto__',
    'callee',
    'caller',
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'prototype',
    'toLocaleString',
    'toString',
    'valueOf',
];

/**
 * Fragment.
 *
 * @var  {Function}
 */
const Fragment = function(props)
{
    return props.children;
}

/**
 * Local lexer.
 * 
 * @var {Function}
 */
var lexer;

/**
 * Local tokenizer.
 * 
 * @var {Function}
 */
var Tokenizer;

/**
 * Local parser.
 * 
 * @var {Function}
 */
var Parser;

/**
 * Local createElement.
 * 
 * @var {Function}
 */
var createElement;

/**
 * Local sanbox.
 * 
 * @var {Function}
 */
var sandbox;

/**
 * Local jsx.
 * 
 * @var {Function}
 */
var jsx;