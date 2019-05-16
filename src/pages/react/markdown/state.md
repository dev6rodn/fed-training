<h1 style="text-align: center; text-decoration: underline; margin-top: 50px">React: Managing State</h1>

As is the case if most applications, there will be data that is not static and may change over time. This is where _state_ comes into play.

Understanding _state_ in React is one of the most fundamental skills to be have in order to be a successful UI developer.

In React, when state changes, that component, and any of its children components, are rerendered so that the new data can be displayed. This will give us an opportunity to review a could of considerations down the road. For now, let's see how we construct and update state.

## Class-based Components

In most applications you'll be dealing with, the only way to update the state is with a class-based component. Up until now, we have only used a function-based component. Using a class-based component allows us to tap into state, as well as lifecycle hooks that'll we'll see in the next section. Consider the following example:

```js
import React from 'react'
const Form = () => {
  return (
    <form>
      <input />
      <button>Send</button>
    </form>
  )
}
```

This component is simply a function that returns markup and as we've seen, can optionally take in _props_.

```js
import React from 'react'
//optionally: import React, {Component} from 'react'

class Form extends React.Component {
  render() {
    return (
      <form>
        <input />
        <button>Send</button>
      </form>
    )
  }
}
```

These two components are now exactly the same. Note that in a class-based component we work with static methods. **If using a class, a render method is mandatory.**

## Controlled components

A controlled component is simply a component that manages its own state in HTML, but now gets it's state managed by React. Examples elements that are typically controlled are `input`, `form`, `option`. Conceptually, this is done because if a user types in an input box that wasn't controlled, React wouldn't be aware of any intermediate values prior to the last one...even typing this sounds super confusing, so we'll be sure to look at an example 😅

## Using State

With all that out of the way, you'll be glad to know that actually using state is relatively straightforward😁

```js
class Form extends Component {
  state = { text: '' } //define our initial state key and value

  handleChange = e => {
    this.setState({ text: e.target.value }) //update our state value. ❗️❗️Asynchronous❗️❗️
    console.log('I would print before state being updated')
  }
  render() {
    return (
      <form>
        {/*State is updated in response to an event*/}
        <input onChange={this.handleChange} />
        <button>Send</button>
      </form>
    )
  }
}
```
