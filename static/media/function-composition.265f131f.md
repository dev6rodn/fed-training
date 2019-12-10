<h1 style="text-align: center; text-decoration: underline">Function Composition</h1>

In JavaScript, there are no explicit types, and there is no indication that a method is
asynchronous or not. One must rely on documentation and well named variable
names. A general rule of thumb is that methods that start with get, fetch, post, delete,
update, or submit are asynchronous. However that is a convention, and not a rule.

As such, how we break up our code and define our variables becomes increasingly important for maintenance and readability.

Review _code sample 1_ for an example of poorly composed code. When done, review below for an explanation as to why it is poorly composed.

### Explanation: Code Sample 1

In the above example, a `person` function is being created. However, I as a developer,
would expect person to equal a string `person = “Michael”` or an object
`person = {name: “Michael”}`. In fact, `person` is a network request that goes out and
fetches a random person. There is also no need to have the line `.then(data => data)`
since that is just taking the data passed into it from the previous .then() and returning it.

Moving on to the next piece of code, when we call person, we have some nesting going on
because the call to the made-up `magicalDatabase.find()` returns a promise. The power in composing functions is that the function inside of a .then() is just a regular JavaScript
function. So we can refactor this to make it more readable (and maintainable) by
putting that function in its own variable.

### Composing Functions: Code Sample 2

Notice how in _code sample 2_ the functions are broken out into their own variables. This helps in readability, documentation, testing, as well as reusability.
