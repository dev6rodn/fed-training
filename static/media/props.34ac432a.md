<h1 style="text-align: center; text-decoration: underline; margin-top: 50px">React: Data Flow</h1>

As we saw in the last section, creating static components is strikingly similar to how we write HTML. This blend of JavaScript and HTML is at the core of building rich, React components.

Moreso than now, however, our content is dynamic and must adapt based on user input. That is where `props` come in to play.

## Working with Props

A `prop` in React is similar to an argument in a JavaScript function. Consider the following:

```jsx
const hello = name => {
  return name
}

// and call the function like so
hello('Michael')

// in React, we'd do the following

const Hello = props => {
  return <p>{props.name}</p> // use curly braces to inject variables
}

// and render the component like so

;<Hello name="Michael" />
```

> 📝 React tries to match JS thinking without too many abstractions 📝

When passing data from a parent component like `App`, to its child component, `GifItem`, the process is straightforward and follows the model in the above example. Furthermore, props can be of any type: Boolean, Strings, Ints, objects, arrays, etc.

## Passing Functions as Props

In general, we like our child components to have as little logic in them as possible and defer the logic to the parent. This helps keep our components _declarative_.

Let's take `GifForm` as an example. All we really want that component to do is to tell it's parent when it was submitted and pass any relevant information. It'll be up to the parent to decide what to do with that information. Following this approach of keeping the business logic outside of the child will let us reuse the component for more than just one use case.

To accomplish this, as a `prop` to the `GifForm` component, we'll pass a function 🤯

The function will be declared in `index.js`, however it'll be called in `gif-form.js`. When called, it will send information back to the parent--hence why this function is called a `callback-function`.

## Installation and Demo

🐛 An issue where data from props don't seem to be appearing

<a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en" target="_blank">React Developer Tools</a>

🛠 A fix for documenting and ensuring what props a component is expected to have

<a href="https://www.npmjs.com/package/prop-types" target="_blank">React Prop Types</a>
