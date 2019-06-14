<h1 style="text-align: center; text-decoration: underline">Moving to Async/Await</h1>

`async/await` is a way to have our asynchronous code appear more synchronous and was introduced in es8.

### Async/Await vs Promises

<blockquote style="color: tomato;">“But we just learned Promises 😩 what's the big deal?”</blockquote>

Great! Async/Await builds off of promises (remember that!) and takes advantage of the same mindset.

### How it works

First, we'll mark our function as asynchronous by tagging it with the `async` keyword (before the parens for an arrow function and before the `function` keyword otherwise). Next, anything in our application that we would like wait on (like a `fetch` request), we'll tag it with the `await` keyword.

Recall that `async/await` builds off of Promises, so **by marking a promise-based function with `await`, execution pauses and the Promise resolves:** `const res = await fetch(someAPI)`, no need to do a `.then()` chain!

❗❗❗ **BY MARKING A FUNCTION AS `async` THE RETURN VALUE IS AUTOMATICALLY WRAPPED IN A PROMISE**❗❗❗

### Error Handling with async/await

Error handling with `async/await` comes in primarily to flavors: `try/catch` blocks, and `.catch()`
