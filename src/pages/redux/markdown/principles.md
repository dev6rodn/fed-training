<h1 style="text-align: center; text-decoration: underline; margin-top: 50px">Principles of Redux</h1>

As discussed in the Overview of this module, redux employs three principles that should be followed:


- Single source of truth
- State is read-only
- Changes are made with "_pure-functions_"

## Breaking down Jargon

### Single Source of Truth

This term is used throughout programming and generally means that there is one location one can refer to obtain the latest information. As it relates to redux and react, instead of our state being stored in various components and various depths, our state is stored in one object called a `store`. This _store_ is where one can refer to in order to get the most up to date value for an item in state.

### State

This is often a confusing point of discussion.  React has a term of _state_ and so does redux.  So what does _state_ exactly mean? 

State is simply **data that changes over time**. There is no requirement for how often it changes, or when it changes. If a value starts off as one value and at another point is something else, then it is considered stateful. 

To provide a real-world analogy, h20 has various types it can take on: water, ice, steam, etc.  So whether it is a solid, liquid, or gas, depends on what state it has, but in the end, it is still h20.

In code, we can say a user is `undefined` at first, but when they sign in to our application, they get a username.  However if they don't like the username, then they also have the option to provide a nickname. Whatever the value, it's still a user. The value can change.  It is stateful.

### Pure Function and Side Effects

A pure function is something that we are already familiar with, though perhaps not by this official sounding name.  A pure function is simply a function that does not contain any side effects.  This begets the question: What is a side effect?

As it relates to functions, a side effect is something that does one of the following:

- modifies an outside variable
- modifies the arguments passed in to it

Let's take a look at an example:

```js
let greeting = 'hello'

const greet = () => {
  greeting = 'Hello, Michael'

  return greeting
}

console.log(greeting) // 'hello'
console.log(greet(greeting)) // "Hello, Michael"
console.log(greeting) // "Hello, Michael" 
```

That's a somewhat trivial example.  Let's look at something more common.

```js
const ages = [0, 30, 13, 10, 18, 21]

const sortedAges = ages.sort()

console.log(sortedAges) // [0, 10, 13, 18, 21, 30] ✅
console.log(ages) // [0, 10, 13, 18, 21, 30] 🤯
```

The `sort` method is an example of an impure function because it modifies an outside variable (the ages array). Other examples: `Array.prototype.[push/pop/shift/unshift]`

That's a common example, but what about a real-world example?

```js
const userList = [
{
  name: "Michael",
  social: {
    twitter: {
      username: "mtliendo",
      url:"https://twitter.com/mtliendo"
    }
  }
},
{
  name: "Nader Dabit",
  social: {
    twitter: {
      username: "dabit3",
      url:"https://twitter.com/dabit3"
    }
  }
}
]

const updatedUserList = userList.map(user => {
  user.social.twitter.url = 'twitter.com'
  return user
})

console.log(updatedUserList[0].social.twitter.url) // "twitter.com" ✅
console.log(userList[0].social.twitter.url) // "twitter.com" 🚨

```
The functions `.map()`, `.filter()`, or `.reduce()` are generally considered safe to use, though a somewhat uncommon fact is that they only perform a shallow-copy, meaning **one level deep**. The rest of the deeper-nested values still have pointers to their original value aka passed by reference.

#### Putting the concept together

So a pure function is created just as any other function would be.  By acknowledging that a function is a pure function, we are saying it doesn't contain any side-effects.  As we build out applications we want to minimize the amount of side-effects it contains because it can lead to unintended variable changes. Unless building a site with only static content however, it is impossible to have an application with zero side-effects, at some point, the application needs values to change.  