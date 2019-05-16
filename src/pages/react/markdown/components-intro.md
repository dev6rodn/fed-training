---
section: 'React'
codesandboxUrl: 'https://codesandbox.io/embed/2439x2v9j0?fontsize=14'
next: 'composition'
---

<h1 style="text-align: center; text-decoration: underline; margin-top: 50px">Creating Our First Components</h1>

Review the above code above and comments. As noted in the comments, React can run in multiple environments. This is possible because JavaScript can run in multiple environments. By learning React, you can take advantage of an entire ecosystem of paths including:

- <a href="https://facebook.github.io/react-native/" target="_blank" rel="noopener noreferrer">Native Mobile Apps</a>
- <a href="https://facebook.github.io/react-360/" target="_blank" rel="noopener noreferrer">VR</a>
- <a href="https://github.com/rohanchandra/react-terminal-component" target="_blank" rel="noopener noreferrer">Terminals</a>
- <a href="https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c" target="_blank" rel="noopener noreferrer">Desktop Applications</a>

---

## 🔀 Switching to JSX

While it may be easy enough to reason about the above code now, imagine having multiple calls to `React.createElement()`.
Also, we may want to declare what we want, instead of explicity saying what is there. In development, this is the principle of _Declarative vs Imperative_ design.

Fortunately, React gives us JSX, which stands for JavaScript Extension. Take the commented out component at the bottom of the codesandbox and replace our current App component with it.

Notice that the application behaves the same.

This is the power of JSX😁 We now get to define our application components _declaratively_ and make them easier to reason about.

## 🐛🐛🐛 Issues

Looking at the codesandbox content, it appears that our `h1` text has serifs. However in `src/styles.css`, it clearly says there is a font-family of `sans-serif`.

Review `index.js` and `styles.css`, then make the necessary changes to have our text display without serifs.
