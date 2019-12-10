<h1 style="text-align: center; text-decoration: underline">Asynchronous JavaScript: part 1</h1>

## JavaScript Waits For No One

What that means is that code is executed from top to
bottom and there is no direct concept of threading.

However, as we’ve seen with event-listeners, there are times when code is not executed sequentially. Additionally, when making network requests, that code takes time as well. This is known as the <a href="https://www.youtube.com/watch?v=8aGhZQkoFbQ" target="_blank">JavaScript Event Loop</a>.

### Promises

You'll see this phrase sprinkled in the next few sections. It's probably the most forgotten concept surrounding Promises, so I'll repeat it over and over 😉:

**whatever data we return from a promise is itself wrapped in a promise**

Promises in JavaScript were introduced in 2015 and work well with how real-life
promises work.

In real life, you may ask for something in the future:

<blockquote style="color: tomato;">“Do you want to hangout later?”</blockquote>

You and your friend make a promise that the request will be kept, so in the meantime you can either plan for the expected (a trip to the movies), or plan if the promise were to be broken (to stay home and rewatch cat videos). In the meantime, you don’t know.

In JavaScript, we say a promise is made for some data, and if the promise is `fulfilled` we get
our expected data, otherwise if the promise is `unfulfilled` we get an error. In the meantime, the promise is `pending`.

<h3 style="text-align: center;"> ❗️❗️The three states of a Promise: <code>pending</code>, <code>fulfilled</code>, <code>unfulfilled</code>❗️❗️</h3>

It should also be noted that while creating promises is fundamental knowledge, in practice,
knowing how to use a promise is much more common.

**whatever data we return from a promise is itself wrapped in a promise**

### Example: Creating a Promise

Review the codesandbox example above in "code sample 1" for insight into how Promises are created.

### Example: Using a Promise -- code sample 2

Review the codesandbox example above in "code sample 2" for insight into how to use a Promise.
