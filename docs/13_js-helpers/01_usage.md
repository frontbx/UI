# Utility Library

Frontbx's JS Utility Library is used throughout the framework and provides a consistent API for common JavaScript functions.

---

Frontbx comes with a handy JavaScript utility library to help speed up production. The library is similar to something like jQuery, but with less bloat. This documentation provides a simple API reference, however for more in-depth detail you can view the library's source code which is well documented.

The documentation below is broken down into logical groupings:

*	[Events](../events/index.html)
*	[Dom Utilities](../dom-utilities/index.html)
*	[Animate](../animate/index.html)
*	[Animate css](../animate-css/index.html)
*	[Array](../array/index.html)
*	[Object](../object/index.html)
*	[String](../string/index.html)
*	[Validation](../validation/index.html)
*	[Misc](../misc/index.html)

### Access

Frontbx's Utility Library can be accessed globally via the Inversion container through the `_` key.

```javascript
const utils = frontbx._();
```

You can also `import` and cache specific functions from the utility library, which reduces memory and is more performant. For example:

```javascript
const [add_class, remove_class] = frontbx.import(['add_class', 'remove_class']).from('_');
```