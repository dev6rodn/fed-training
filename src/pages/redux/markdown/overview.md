<h1 style="text-align: center; text-decoration: underline; margin-top: 50px">Overview</h1>

<img src="https://liendo-fed-training.s3.amazonaws.com/redux-flow.jpeg" alt="redux flow" height="600px" width="600px" style="display:block; margin: 10px auto">

#### 📝 An action is triggered from the UI, and flows into the reducers, the reducers return a new piece of state which gets put into the store. The store feeds data back into the UI.

<a href="https://redux.js.org/" target="_blank" rel="noreffer noopener">Redux</a> is a state management library that pairs well with React's data model. However it should be noted that redux itself has nothing to do with react.

Conceptually, redux asks for those using it to stick to 3 principles:

- Single source of truth: Instead of state being stored in our components, state is stored in a "_store_".
- State is read-only: As with react, state should not be updated directly, instead special functions should be used.
- Changes are made with "_pure-functions_": The functions that update the state in our application do not have "_side-effects_".

Those principles will be reviewed in depth over the course of the next sections.
