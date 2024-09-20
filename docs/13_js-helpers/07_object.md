### Object

| link   | Function       | Description                                                                               |
|:---:|----------------|-------------------------------------------------------------------------------------------|
| <a href="#extend" class="js-waypoint-trigger">#</a> | `extend`       | Extends two objects, object functions.                                                    |
| <a href="#clone_deep" class="js-waypoint-trigger">#</a> | `clone_deep`   | Deep clones an object or array including all nested values.                               |
| <a href="#bind" class="js-waypoint-trigger">#</a> | `bind`         | Binds a function to a context so it can be identified later if needed.                    |
| <a href="#flatten_obj" class="js-waypoint-trigger">#</a> | `flatten_obj`  | Returns a new flattened version of an object and it's `prototype`(s) with its properties. |
| <a href="#object_props" class="js-waypoint-trigger">#</a> | `object_props` | Returns an array of keys of all properties of an object and its `prototype`(s).           |
| <a href="#prototypes" class="js-waypoint-trigger">#</a> | `prototypes`   | Returns a flat array of of all nested prototypes of an object.                            |


<br>

#### extend

Extends two objects, object functions

```javascript
extend(Object|Function: base, Object|Function: extension): Object|Function
```

```javascript
const Base = function(one, two)
{
	this.one = one;

	this.two = two;

	this.doSomething();
}
Base.prototype.doSomething = function()
{
	console.log(`${this.one} ${this.two}`);
}

const Extension = function(one, two)
{
	this.super(one, two);
}

const Extended = extend(Base, Extension);

// hello world!
let e = new Extended('hello', 'world!');
```

```javascript
const Base = function(one, two)
{
	this.one = one;

	this.two = two;
}
Base.prototype.doSomething = function()
{
	console.log(`${this.one} ${this.two}`);
}

const Extension = function(one, two)
{
	this.one = one;

	this.two = two;
}

const Extended = extend(new Base('foo', 'bar'), new Extension('hello', 'world'));

// hello world!
Extended.doSomething();
```

<br>

#### clone_deep

Deep clones an object or array including all nested values.

```javascript
clone_deep(Mixed: original): Mixed
```

```javascript
let clone = clone_deep([ {foo: 'foo'} ]);

let clone = clone_deep({foo : () => console.log('hello world')});
```

<br>

#### bind

Binds a function to a context so it can be identified later if needed.

```javascript
bind(Function: function, Mixed: context): Function
```

```javascript
function foo() { console.log(this); }

let bound = bind(foo, 'bar');

// bar
bound();
```

<br>

#### flatten_obj

Returns a new flattened version of an object and it's `prototype`(s) with its properties.

```javascript
flatten_obj(Object: object, ?deep: deep = false): Object
```

```javascript
const WithProto = function(one, two) { }
WithProto.prototype.doSomething = function() { }

// { doSomething: function()... }
let flat = flatten_obj(new WithProto);
```

<br>

#### object_props

Returns an array of keys of all properties of an object and its `prototype`(s).

```javascript
object_props(Object: object, ?deep: deep = false): Array
```

```javascript
const WithProto = function(one, two) { this.foo = 'bar' }
WithProto.prototype.doSomething = function() { }

// [ 'foo', 'doSomething' ]
let props = object_props(new WithProto);
```

<br>

#### prototypes

Returns a flat array of of all nested prototypes of an object.

```javascript
prototypes(Object: object): Array
```

```javascript
const WithProto = function(one, two) { this.foo = 'bar' }
WithProto.prototype.doSomething = function() { }

// { foo: 'bar', doSomething: function()... }
let protos = prototypes(new WithProto);
```