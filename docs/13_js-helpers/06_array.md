
### Array

| link   | Function       | Description                                                                                                                                                                                                                                                      |
|:---:|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <a href="#each" class="js-waypoint-trigger">#</a> | `each`         | Loops through an array or object and runs a callback on each iteration. Returning `false` will break the loop.                                                                                                                                                   |
| <a href="#map" class="js-waypoint-trigger">#</a> | `map`          | Returns a new object or array by through and running a callback to accept or reject each iteration. Returning `false` rejects item. Returning `undefined` stops the loop. Any other return value will be set on the object or array under the current key/index. |
| <a href="#array_unique" class="js-waypoint-trigger">#</a> | `array_unique` | Filters out non-unique values from an array.                                                                                                                                                                                                                     |
| <a href="#array_filter" class="js-waypoint-trigger">#</a> | `array_filter` | Filters out empty items from an array or object and returns a new Array or Object.<br>Does not modify the original Array or Object, rather it will filter out empty items and return a new Object or Array.                                                      |
| <a href="#array_set" class="js-waypoint-trigger">#</a> | `array_set`    | Sets a value to array or object using `dot.notation`.<br>Sets key/value an pair to any nested array or object via `dot.notation`. If parent items do not exist in the path, they are created.                                                                    |
| <a href="#array_get" class="js-waypoint-trigger">#</a> | `array_get`    | Returns an item from an array or object using `dot.notation`.<br>Returns the item indexed by the path or `undefined` if it does not exist.                                                                                                                       |
| <a href="#array_has" class="js-waypoint-trigger">#</a> | `array_has`    | Checks if an item from an array or object exists using `dot.notation` and returns a boolean.                                                                                                                                                                     |
| <a href="#array_delete" class="js-waypoint-trigger">#</a> | `array_delete` | Deletes an item from an array or object exists using `dot.notation`.                                                                                                                                                                                             |
| <a href="#in_array" class="js-waypoint-trigger">#</a> | `in_array`     | Checks if an item exists in array or object.                                                                                                                                                                                                                     |


<br>

#### each

Loops through an array or object and runs a callback on each iteration. Returning `false` will break the loop.


```javascript
each(Array|Object: array, Function: callback, ?Mixed: this, ...args): Void
```

```javascript
// Loop an array
each(['one','two','three'], (index, value) => console.log(index, value));

// Loop an object
each({foo: 'one', bar: 'two'}, (key, value) => console.log(key, value));

// Stop loop
each(['one','two','three'], (index, value) => index >= 1 ? false : console.log(index));
```

<br>

#### map

Returns a new object or array by through and running a callback to accept or reject each iteration. Returning `false` rejects item. Returning `undefined` stops the loop. Any other return value will be set on the object or array under the current key/index.

```javascript
map(Array|Object: array, Function: callback, ?Mixed: this, ...args): Void
```

```javascript
// Loop an array
// [0,1,2]
let arr = map(['one','two','three'], (index, value) => index);

// {foo: 'foo', bar: 'bar'}
map({foo: 'one', bar: 'two'}, (key, value) => key);

// ['two']
let arr = map(['one','two'], (index, value) => value !== 'one' ? value : undefined);
```

<br>

#### array_unique

Filters out non-unique values from an array.

```javascript
array_unique(Array|Object: array): Array
```

```javascript
// [0,1,2,3]
let arr = array_unique([0,1,2,3,3]);
```

<br>

#### array_filter

Filters out empty items from an array or object and returns a new Array or Object.<br>Does not modify the original Array or Object, rather it will filter out empty items and return a new Object or Array.

```javascript
array_filter(Object|Array: array): Object|Array
```

```javascript
// [0, 1, 2, 3, 4, 5]
let array = [0, 1, 2, null, undefined, 3, 4, '', 5];
array = array_filter(array);

// [0, 1, 2, 3, 4, 5, 6]
let array = [0, 1, 2, null, undefined, 3, 4, '', [], 5, {}, 6];
array = array_filter(array);
```

<br>

#### array_set

Sets a value to array or object using `dot.notation`.<br>Sets key/value an pair to any nested array or object via `dot.notation`. If parent items do not exist in the path, they are created.

```javascript
array_set(String: path, Mixed: value, Object|Array: array): Void
```

To set an array key, use the array index with brackets `[num]`. For Objects simply use the Object key and a dot `.key`:

```javascript
let array = [
    {foo: 'foo'},
    {bar: 'bar'}
];

/*
[
    {foo: 'bar'},
    {bar: 'bar'}
];
*/
array_set('[0].foo', 'bar', array);
```

```javascript

let obj = {
    foo: [1,2,3],
    bar: [4,5,6]
};

/*
{
    foo: [9,2,3],
    bar: [4,5,6]
};
*/
array_set('foo[0]', 9, obj);
```

On nested nested Arrays/Objects if the path does not exist it will be created automatically.

```javascript
// [0, 1, 2, 3, 4, 5]
let obj = {
    foo: [
        { bar: { baz: [1, 2, 3] } }
    ]
};

/*
{
    foo: [
        { bar: { baz: [1, 9, 3], foo: [3] } }
    ]
};

*/
array_set('foo[1].bar.baz[1]', 9, obj);

array_set('foo[1].bar.foo[1]', 3, obj);
```

<br>

#### array_get

Returns an item from an array or object using `dot.notation`.<br>Returns the item indexed by the path or `undefined` if it does not exist.

```javascript
array_get(String: path, Object|Array: array): Mixed
```

```javascript
let array = [ {foo: 'foo'} ];

let foo = array_get('[0].foo', array);
```
To access an array key, use the array index with brackets `[num]`. For Objects simply use the Object key and a dot `.key`:

```javascript

let array = [
    {foo: 'foo'},
    {bar: 'bar'}
];

// foo
let foo = array_get('[0].foo', array);
```

```javascript

let obj = {
    foo: [1,2,3],
    bar: [4,5,6]
};

// 1
let one = array_get('foo[0]', obj);
```

`array_get` will work on deeply nested Arrays/Objects without having to run validation that the item exists first.

```javascript

let obj = {
    foo: [
        { bar: { baz: [1, 2, 3] } }
    ]
};

// Returns 2
let two = array_get('foo[0].bar.baz[1]', obj);

// Returns undefined
let undef = array_get('foo[0].bar.baz[15]', obj);
```

<br>

#### array_has

Checks if an item from an array or object exists using `dot.notation` and returns a boolean.


```javascript
array_has(String: path, Object|Array: array): Boolean
```

```javascript
let array = [ {foo: 'foo'} ];

// true
array_has('[0].foo', array);
```

<br>

#### array_delete

```javascript
array_has(String: path, Object|Array: array): Void
```

```javascript
let array = [ {foo: 'foo'} ];

// No need re-assign here as the original array is now modified.
array_delete('[0].foo', array);
```

<br>

#### in_array

Checks if an item exists in array or object.

```javascript
in_array(Mixed: needle, Object|Array: array, ?Boolean: strict = false): Void
```

```javascript
let array = [ 1, 2, 3 ];

// true
in_array(2, array);

// false
in_array(5, array);
```

When passing `strict` as `true`, values must be the same 

```javascript
let obj = { foo: 'bar' };
let array = [obj];

// true
in_array(obj, array);

// true
in_array({ foo: 'bar' }, array);

// false
in_array({ foo: 'bar' }, array, true);
```
