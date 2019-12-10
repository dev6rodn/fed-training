<h1 style="text-align: center; text-decoration: underline; margin-top: 50px">Using Redux to manage React state</h1>

<img src="https://liendo-fed-training.s3.amazonaws.com/redux-flow.jpeg" alt="redux flow" height="600px" width="600px" style="display:block; margin: 10px auto">

Hopefully at this point, you're tired of seeing the above image 😃

We've discussed _actions_, _reducers_, and _state_. However we haven't discussed, the redux store itself, as well as how this all fits into the scope of a react project. Both of those items will be discussed in this section.

## Demystifying the Redux Store

This is actually one of the easiest concepts. In redux architecture, the store is simple a JavaScript object. Now this object may have additional properties that allow us to get the state and so on, but at it's core, it is an object that contains our state.

In the case of a todo app, where the state is managed by redux, the store will look like the following:

```js
const store = {
  todos: [],
}
```

Now it's not as simple as that, but we're actually not that far off either.

## Integrating React and Redux with...react-redux

Because redux is simply a package that helps manage state and has nothing to do with react, we need a way to bind the two together. That's exactly where <a href="https://react-redux.js.org/" target="_blank">react-redux</a> comes into play. This simple package comes with a set of utilities to help us marry the two.

### 💻 src/index.js

To begin adding redux to our application, we see that we are importing a few additional items:

1. Provider: This is a component that will hold a reference to our store
1. createStore: This function is used to create our store
1. rootReducer: An import of our reducers

After importing, you can see that we create the store by passing in our reducers, and take the returned value and pass that as a prop to the Provider component.

### 💻 src/components/app.js

This is the heart of the application and where everything comes together. Notice the imports:

1. `import * as actions from "../actions"` : This syntax says "give me all the named exports in this file, and put them in an object called "actions".
1. connect : This function will connect any react component to our redux store (super handy!)

At first glance, the app component looks like any other component. Let's skip over that for now to take a peek at what's going on at the bottom of the file:

```js
const mapStateToProps = state => {
  return {
    todos: state,
  }
}

export default connect(
  mapStateToProps,
  actions
)(App)
```

This is where all the "magic" happens. _mapStatToProps_ is a function, that when called, will get passed our redux store's state. Our job in this function is to _map_ that piece of _state_ to our *props*🤯

Because we only have one piece of state that represents our todos, we return an object with a key of "todos" and a value of "state". Now in our component, _this.props.todos_ is actually referring to this data in our redux store. Keep in mind that this is read-only.

> "_But how does that state get passed in, and how then does one update the state?_"

Great Question!

This is exactly where the last part comes in, let's break down the `connect` function:

```js
connect(
  mapStateToProps, // 1st argument is the function we created to put our state on our props
  actions // 2nd argument is used to put our imported action creators on our props
)(App)
// The connect function itself returns a function.  Instead of assigning it to a variable, we immeadiately call it and pass in our App component.
```

### Reviewing the App component

With our new understanding, we can revisit the app component. Notice that in `src/index.js` we are not passing any props to App. Instead, those props are being attached by redux via the react-redux _connect_ function.

Also note the _handleSubmit_ function calls our action creator via `this.props.addTodo()`.

With this new understanding, let's go through the flow:

1. We create our component fires off an action
1. The action goes to our reducers
1. The reducer returns a new piece of state for our store
1. The updated store is passed to our component as a prop. This component will re-render when it's props change.
1. The component re-renders all of it's children components
1. Our App component gets the new values it was reading from.
