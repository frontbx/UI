# Container

Frontbx's components are all held via a single application interface. The only global variable in the window namespace is the global `Frontbx` object!

---

*	[Usage](#usage)
*	[Functions](#functions)
*	[Dependency injection](#dependency-injection)

---

### Usage

Frontbx uses an Inversion control Container to hold all components and related peripherals. The Frontbx application and Container can be globally accessed via the `Frontbx` variable. This is the only globally available variable


```javascript
let fbx = frontbx;
```

To set a value into the Container use the `set` method:

```javascript
fbx.set('foo bar', 'Awesome!');
```

To retrieve a value use the `get` method:

```javascript
let awesome = fbx.get('foo bar');
```

The has method checks if a key is stored in the Container:

```javascript
if (fbx.has('foo bar'))
```

The `delete` method will delete a key value pair from the Container:

```javascript
fbx.delete('app');
```

Any key-value pair set to the Container can also be retrieved using a direct method call. Frontbx converts the key `CamelCase` when adding to the Container:

```javascript
let awesome = fbx.FooBar();
```

---

#### Functions

You can set any variable you like to a key, including functions, instantiated instances and Object Functions. Functions that can instantiate an instance will automatically get created with any provided arguments:

```javascript
fbx.set('do something', (arg1, arg2) => console.log(arg1, arg2));

// Or via method
fbx.DoSomething('foo', 'bar');
```

Here is am example of setting an instance as key / value pair. The same instance will be returned each time the key is retrieved:

```javascript
const app = function(a, b)
{
	console.log(a, b);
}

fbx.set('app', new App(1, 2) );

// Retrieve via get
let instance = fbx.get('app');

// Or directly via method
let instance = fbx.App();
```

With the example below, a new instance will be created each time the key is retrieved with any arguments passed on:

```javascript
const app = function(a, b)
{
	console.log(a, b);
}

fbx.set('app', app);

// Retrieve via get
let instance1 = fbx.get('app', 1, 2);

// Or directly via method
let instance2 = fbx.App(1, 2);
```

The `singleton` method takes a Object Function and returns the same instance no matter how many times it's called. The instance will only be created when it's first called:

```javascript
const app = function(a, b)
{
	console.log(a, b);
}

fbx.set('app', app);

// Retrieve via get 
let instance = fbx.get('app', 1, 2);

// Or directly via method
let instance = fbx.App(1, 2);
```

When setting a function as a key/value pair, if you require reference to underlying function itself (rather than it being called or instantiated), pass the `fbx.IMPORT_AS_REF` to retrieve the function:

```javascript
fbx.set('do something', (arg1, arg2) => console.log(arg1, arg2));

// Or via method
let callback = fbx.DoSomething(fbx.IMPORT_AS_REF);

callback('foo', 'bar');
```

---

### Dependency injection

Frontbx comes with a handy Dependency injection utility to import functions, constants or any other properties from an object or instantiated Object Function. This means you only need to import the variables you require on a given piece of code.

Here's a very basic example of setting an Object Function instance, then importing one of it's dependencies 

```javascript
const app = function()
{
	this.foo = 'foo';
}

app.prototype.bar = function()
{
	return `${this.foo}bar`;
}

fbx.set('App', new app);
```

```javascript
let [bar] = fbx.import(['bar']).from('App');

console.log(bar());
```

This design pattern is used throughout Frontbx for dependency injection using the `Utils` library which is set via the underscore (`_`) key in Frontbx' container.

For example to import the `add_class` and `remove_class` functions, you would use the code below:

```javascript
let [add_class, remove_class] = fbx.import(['add_class', 'remove_class']).from('_');
```

Although this is longer than accessing the method normally, if you're reusing the method multiple times it will ultimately save code space and memory to cache it.

```javascript
fbx._().remove_class(node, 'bar');
```

> For more information on using Frontbx`s utility library - checkout the [JS Utils Page](../utils/index.html)
