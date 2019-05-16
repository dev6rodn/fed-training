<h1 style="text-align: center; text-decoration: underline; margin-top: 50px">A working Gif Loader</h1>

Our Gif Loader application is nearing completion. However there are still a few areas that can be tidied up. Additionally, when a user enters `searchText`, we'd like a request to the actual API to be made--without having our API Key live in code/version control.

## Lifecycle Methods

![React Lifecycle](../images/react-lifecycle.jpeg)

Lifecycle methods are used to run code at a specific moment in the application, for example: When it first mounts, first updates, or right before it goes away.
For a further example of lifecycle methods, especially relating to our current knowledge, feel free to checkout <a href="https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class" target="_blank">this section of the React docs</a>.

## Data Fetching in React

Recall that React relies on JavaScript fundamentals when it comes to many operations. As such, data fetching is the same as if we were making a regular 'ol JavaScript application, meaning that our knowledge of `fetch` transfers over seamlessly.

## Not Injecting API Keys

There are many approaches to preventing API Keys from being hard-coded in an application. This provides security, as well as affirms yourself as a knowledgeable developer. React is unopinionated about how this is done, but as with Parcel, `.env` files are supported. To ensure environment variables don't clash with predefined system variables, if using Create React App, they must start with `REACT_APP_`.

## Finalizing Gif Loader

With this new conceptual understanding, we are now in a good place to finalize this application by putting together all of the pieces. If up to it, try to do this on your own and consult the solution files when stuck.

When done, head on over to the next screen for the module challenge!
