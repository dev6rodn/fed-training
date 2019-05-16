<h1 style="text-align: center; text-decoration: underline"><a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" target="_blank">Asynchronous JavaScript: part 2</a></h1>

## Data Fetching with the Fetch API

`fetch` is a nice way to handle http requests. If you have prior experience with
JavaScript, you may recall using `XHR` or if you used a library like [jQuery](https://jquery.com/), there was
`$.get()`. `fetch` attempts to solve both cases of complicated configuration and needing an external library to perform network requests.

With `fetch`, when a request is made, you are given back a response. That response contains things like headers, meta information, and methods that will transform the data that was given back.

**In short, with fetch, you have to tell it what kind of data you are expecting.**

This is similar to setting the content-type header. Fetch will then attempt to convert the data it received to the specified type of data.

## Using Fetch

`fetch` is promise-based. Using `fetch` requires a knowledge of how JavaScript Promises work. As such, this section greatly expands on the [previous section](/learning-tracks/modern-javascript/async-js-1). The first thing we'll notice is that **whatever data we return from a promise is itself wrapped in a promise**, allowing us to do "promise-chaining"

For an example on how to use `fetch`, please see _code sample 1_.

## Handling Errors in Promises

We've already seen that one way to handle errors in a Promise is to
pass in a second argument as a function in the `.then` method.

However, when chaining promises (as shown in code sample 1), it would become exhaustive to follow the best practice of checking for errors when really we only care if an error was thrown _anywhere_ in the promise chain. Fortunately, that behavior is provided to us with the `.catch` method.

As with most error-handling functions, the `.catch` method takes a single argument which is an anonymous function. That function provides an error variable, which is typically an object.

For an example, please see _code example 2_

## I repeat

**"whatever data we return from a promise is itself wrapped in a promise"**
