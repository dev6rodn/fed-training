<h1 style="text-align: center; text-decoration: underline; margin-top: 50px">Redux Actions</h1>

<img src="https://liendo-fed-training.s3.amazonaws.com/redux-flow.jpeg" alt="redux flow" height="600px" width="600px" style="display:block; margin: 10px auto">

With a high level overview out of the way, we are now in a position to discuss individual concepts. In later sections we'll take these concepts and apply them together in an application.

We've see the image above before. It's the same from the _overview_ section. Recall the associated note:

#### 📝 An action is triggered from the UI, and flows into the reducers, the reducers return a new piece of state which gets put into the store. The store feeds data back into the UI.

Let's begin to dissect this. For our purposes, we know that the _Web App_ will be a React application. However, we have not discussed what an action is, what it does, or how we write them.

### Our First Action

An action is an object with a `type` property. That's it. Now as with any object, we can add more data to it. However, at its core, the requirements for a redux object is simply an object with a `type` property, in which the `type` property has a string value.

```js
const toggleModal = {
  type: 'TOGGLE_MODAL',
}
```

As you'll come to realize, most of the time spent writing redux logic will be spent writing normal JavaScript.

### Action Types

> 📝 "An action is triggered from the UI, and flows into the reducers"

When an action fires, every reducer we have will check to see if they should respond to it. How that's done is by looking at the `type` property. So if an action is:

```js
{
  type: 'TOGGLE_COMPLETED_STATUS'
}
```

One can expect our reducers to have logic saying:

```js
if (action.type === 'TOGGLE_COMPLETED_STATUS') {
  // DO SOMETHING.
}
```

However, notice how easy it would be to accidentally misspell our String. Additionally, notice from a maintanance perspective, that the string would have to updated in two places.

This is where action-types come into play. An action-type is just a constant that refers to an action. so instead of the above, we can do the following:

```js
//An action-type
const TOGGLE_COMPLETED_STATUS = "TOGGLE_COMPLETED_STATUS" 🤩

// Our action
{
  type: TOGGLE_COMPLETED_STATUS
}


// Our reducer checking if it's an action it cares about
if(action.type === TOGGLE_COMPLETED_STATUS ) {
  // DO SOMETHING.
}
```

### Action Creators

Action creators are simply functions that return an action. That's it.

Say we're building a todo app. In the case of the above example, it would be nice to know which todo was being toggled. In that case, we would want a variable to point to the id of the todo to be toggled.

```js
const toggleItem = id => {
  return {
    type: TOGGLE_COMPLETED_STATUS,
    id,
  }
}
```

Now when a reducer is setup to respond to the `TOGGLE_COMPLETED_STATUS` action, it knows what todo to toggle.
