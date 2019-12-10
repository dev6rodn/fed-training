<h1 style="text-align: center; text-decoration: underline">Understanding "this" in JavaScript</h1>

As in many languages, JavaScript has a way to reference other objects and their properties either directly or indirectly. In JavaScript, we do that with the "this" keyword.

The aim of this section is to demystify the different contexts that `this` can refer to. Speaking in JavaScript lingo, we'd say "the different ways `this` can be bound". In doing so, we'll explore the four essential contexts that would come up:

1. Implicit Binding
1. Explicit Binding
1. Lexical Binding

### Implicit Binding

By far the one that will come up most often, implicit binding says we can figure out what `this` refers to by looking to the left of the dot (`.`).

Here's an example:

📝**If wanting to follow along, open up your Chrome Developer Tools to copy/paste the code examples**📝

```js
const michael = {
  firstName: 'Michael',
  lastName: 'Liendo',
  greet: function() {
    console.log(`Hello, my name is ${this.firstName}`)
  },
}

// michael.greet() will return "Hello, my name is Michael"
```

When the _greet_ function gets called, it comes across the `this` keyword, at this point it says "is there anything to the left of the dot. If so, then it _binds_ that object to refer to `this`. So we can think of `this.firstName` as essentially the same as `michael.firstName`.

Here's a slightly trickier example:

```js
const jessica = {
  name: 'Jessica',
  age: 24,
}

const felipe = {
  name: 'Felipe',
  age: '29',
}

const addGreetingMixin = function(obj) {
  obj.greet = function() {
    console.log(`Hi! I'm ${this.name} and I'm ${this.age} year(s) old.`)
  }
}

addGreetingMixin(jessica)
addGreetingMixin(felipe)

// jessica.greet() will then return "Hi! I'm Jessica and I'm 24 year(s) old."
// felipe.greet() will then return "Hi! I'm Felipe and I'm 29 year(s) old."
```

In any case, when a function uses the `this` keyword, it will first look to see if there is anything to the left of the dot as a way to figure out what `this` is bound to.

---

### Explicit Binding

If Implicit Binding is what you'll come across 75% of the time, Explicit Binding takes up 15 more percent.

Sometimes we have a function that we want to be generic enough so that when it gets called, the context of this can vary. So where _implicit binding_ was from the perspective of an object, _explicit binding_ is from the perspective of a function. There are three ways to accomplish this:

1. fn.call()
1. fn.apply()
1. fn.bind()

#### .call

This method is available on all functions (In JavaScript, functions are simply a special type of object!)

The purpose of `.call` is to _explicitly_ call a function (hence the name). The main reason you'd want to use this method over how functions are normall called, is because you want to change the context of `this` _at the time of **execution**_.

📝**If wanting to follow along, open up your Chrome Developer Tools to copy/paste the code examples**📝

```js
const hello = function() {
  console.log('hello')
}
hello() // "hello"
hello.call() // "hello"
```

So why would we use `.call()` over the usual way of just using `()`? Let's consider the following:

```js
const sayAge = function() {
  console.log(`Hi! I am ${this.age} year(s) old.`)
}

const noah = {
  name: 'Noah',
  age: 6,
}
```

In the above code sample, when the `sayAge` function _executes_, we want to tell it what `this.age` is referring to. To do that, we can call the function as so:

```js
sayAge.call(noah) // the first arugment to the call function is what gets defined as `this`.

//also, if wanting to pass arguments to the sayAge function:
sayAge.call(noah, arg1, arg2, arg3)
//const sayAge = function(arg1,arg2,arg3) {}
```

#### .apply

`.apply` is very similiar to `.call`, the exception being that it takes in an array of arguments instead of listing them out individually:

```js
const hobbies = ['eating tacos', 'running', 'coding']

const trainingClass = {
  topic: 'frontend',
  instructor: 'Michael Liendo',
}

const displayTop3InstructorHobbies = function(hobby1, hobby2, hobby3) {
  console.log(`${this.instructor} has these hobbies: `)
  console.log(hobby1)
  console.log(hobby2)
  console.log(hobby3)
}
```

#### .bind

The last of the trio is `.bind`. This method behaves exactly as `.call` with the exception of not executing the function right away. Instead, it binds the object to the function and returns that bound-function to be called at another time.

```js
function greetWithKnowledge(l1, l2, l3) {
  console.log(
    `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`
  )
}

const user = {
  name: 'Michael',
  age: 30,
}

const languages = ['JavaScript', 'GraphQL', 'TypeScript']

const newFn = greet.bind(user, languages[0], languages[1], languages[2])
newFn()
```

Binding functions will be revisited in the React section.

---

#### Lexical Binding

Have you noticed that no arrow-functions have been used in any of the above examples? That was on purpose, because arrow-functions embrace the notion of _lexical binding_. It's a bit of a scary name for something that is arguably the most straightforward.

Arrow-functions don't have their own `this` to work with like your typical function declarations do. Instead, they look up to their parent and use their `this`. The idea of looking up the chain until something is found is called _lexical lookup_.

Let's see this in action:

```js
const me = {
  name: 'Michael Liendo',
}

const movies = ['Avengers', 'Jaws', 'Balto']

const displaySeenMovies = function(movies) {
  movies.map(movie => {
    console.log(`${this.name} has seen ${movie}`)
  })
}

// displaySeenMovies(movies) will not log anythign for this.name

displaySeenMovies.call(me, movies) //will work as expected
```

In the above example, by using `.call`, we provide a `this.name` value from the `me` object. Since `displaySeenMovies` now has a `this` with a `name` property, the arrow-function used in our `.map` looks up to its parent and figures out that `this.name` is as if it were `me.name`.
