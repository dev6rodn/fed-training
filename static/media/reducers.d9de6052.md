<h1 style="text-align: center; text-decoration: underline; margin-top: 50px">Concept: Redux Reducers</h1>

<img src="https://liendo-fed-training.s3.amazonaws.com/redux-flow.jpeg" alt="redux flow" height="600px" width="600px" style="display:block; margin: 10px auto">

### Breaking down a reducer

A reducer, as the name implies, takes many items, and reduces them down to a single item.
This is similiar in meaning to the `[].reduce()` method found in javascript.

In the context of redux, many actions might be dispatched off to our reducers, but it's the reducers job to look at the `action.type` so that it can return a single piece of state.

---

As it pertains to redux, a reducer is a function that does the following:

1. Takes in two arguments: `state`, and `action`.
1. Has a way to decide which actions it cares about (and gracefully handles those it doesn't care about).
1. Returns a new piece of state.

That's the high-level overview, but let's try and get more specific, starting with a question that's now in need of being answered:

> "So what is 'state'?"🧐

When we say "state" we are referring to values that change. For example, let's imagine a list of todo items:

In the beginning, there are no todo items. However, in a traditional application, all CRUD operations would apply. Todos can be created, read, updated, and deleted:

```js
let todos = [] // The initial state of the todo

// An action fires, it goes to our reducer, and the reducer adds the todo:

todos = [{ id: 1, text: 'first todo' }] // The new piece of state.
```

In the above example, our state in represented with an array, however state can be any JavaScript value:

```js
let isLoggedIn = false // The initial state is a boolean

// An action fires, it goes to our reducer, and the reducer updates the status

isLoggedIn = true // The new piece of state.
```

### Our First Reducer

```js
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED_STATUS,
} from '../actions/types'

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: // {type: ADD_TODO, {id: 1, isCompleted: false, text: "walk dog"}}
      return [...state, action.todo]

    case DELETE_TODO: // {type: DELETE_TODO, id: 1}
      return state.filter(todo => todo.id !== action.id)

    case TOGGLE_COMPLETED_STATUS: //{type: TOGGLE_COMPLETED_STATUS, id: 1}
      return state.map(todo =>
        todo.id === action.id ? !todo.isCompleted : todo
      )
    default:
      return state
  }
}
```

In the above code, we have a reducer that can respond to three actions: adding, deleting, and toggling a todo.

The reducer has taken in two arguments: `state` and `action`.

When redux first initializes, our state is `undefined`. In that case, we initialize our state by saying `state=[]`. The second argument, `action`, refers to the current action that is being passed into redux. While, actions flow into all of our reducers, they do so one at a time.

Next up, we have a `switch` statement. While we could've used many _if-blocks_, a switch statement lends itself better for readabilty. Take note that in each switch-case, what gets returned in a _new_ piece of state, not simply a modified version of the current state. This is one of the core principles of redux and is meant to be followed strictly.

Lastly, if an action get's passed in that this particular reducer doesn't care about, we simply return the state as is.
