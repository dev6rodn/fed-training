<h1 style="text-align: center; text-decoration: underline; margin-top: 50px">Supporting Different Environments</h1>

<img src="https://s3.amazonaws.com/liendo-fed-training/js-webpack-babel.jpg" alt="Modern Frontend Build Tools">

ES2015 introduced many enhancements to the JavaScript syntax. However JavaScript is meant to run in an environment, and it is up to those environments to add support. On the frontend, those environments are browsers and each browser can have varying support--if any at all for what they decide to implement. In addition, the JavaScript model for adding features has changed. Instead of a large update every ~8 years, there is now a smaller update every year. In that case, browsers may choose to skip adding features for that year all together.

Another common scenario is wanting to use new JavaScript features in a work-place environment that only supports legacy browsers.

For a list of what JavaScript features are available by year and browser, please refer to the [compatibility-chart](http://kangax.github.io/compat-table/es6/) for an overview, or [caniuse](https://caniuse.com/) for a specific feature.

## <a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer"/>Babel</a>

Babel is a JavaScript transpiler. In its simplest form, that means you give it something and it converts it to something else based on specified rules. More concretely, we want to give it our JavaScript code, and have it converted to syntax that is supported by all the browsers our applications will be supporting.

For hands on experience with what is going on, the babel website has an interactive environment where you can type in code and [see it converted](https://babeljs.io/repl)
Once there, delete the sample code and try creating a few functions, variables, map(), filter(), reduce() functions to see what the output is like.

This document won’t go into how to get babel installed locally since many projects will have either already set up their own config, or use tools (mentioned later on) that created it in the background. If interested however, it’s highly encouraged to follow their [setup guide](https://babeljs.io/setup)

## <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer"/>Webpack: A JavaScript Bundler</a>

So far, we’ve discussed importing javascript files. But what if we could also import image files the same way? Or JSON files. Or instead of having many CSS files, we just have one file that is generated at build time and gets shipped to the browser?

That is exactly what webpack can provide to us. Webpack, while it can be extended to provide rich functionality (much like a task runner) is at it truest form, simply a JavaScript bundler. Meaning it takes assets of one file type and converts them to a single file. This can increase performance because instead of many network requests occuring to get small JavaScript files, a single request is made for one larger file. Over time, that single request can grow large in file size, however webpack solves this issue was well.

Since it’s latest version release, a large portion of the Webpack documentation has been greatly improved to provide guides, tutorials and links to other resources. If interested, I highly encourage [a look into them](https://webpack.js.org/guides)

For the most part however, webpack will either come preconfigured or built into the tooling frameworking you are using. Still, it's nice to know what's going on behind the scenes.

🎉That's it!🎉

You know have the context of where the current state of JavaScript is at and are now ready to learn a modern frontend framework, ReactJS!⚛️
