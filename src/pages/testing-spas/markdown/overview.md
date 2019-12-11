## Project

The project for this section is located at [HERE](https://github.com/aquent-it-solutions/deere-testing).

## Testing React Components

Automating tasks is not a new concept to most developers. However, in the world of web-development, the notion of testint our applications with different types of tests, gives us confidence that it works as expected, _without having to perform manual checks_.

## Different Types of Tests

#### Static Testing

This allows us to add additional text to our code so that checks for missing options, fields, and configurations can be caught. This is built in to most strongly-typed languages, such as Java. However, JavaScript is loosely-typed. The most common way to add this type of testing to a project is to use a super-set of JavaScript known as [TypeScript](https://www.typescriptlang.org/) or [Flow](https://flow.org/)

#### Unit Tests

By far, the most common type of test. This is where a single piece of code (ala a "unit") is tested:

```js
// The piece of code we can to test
function sayHi(name) {
  return `Hi, ${name}`
}

// An example test
expect(sayHi('Michael')).toEqual('Hi, Michael')
```

A key takeaway in this case is that we don't care about how the result is generated. We just care out what goes in -- `name`, and what comes out -- `'Hi, Michael'`.

#### Integration Tests

Sometimes the code that we write is dependent of another function. This is great for encapsulating data, but conflicts with testing a "unit" of code. Let's rewrite the above example to get a better visual:

```js
// The piece of code we can to test
function sayHi(name) {
  const result = fetchGreetingFromAPI(name)

  return result
}
```

In the above example, the `sayHi` function is dependent on an asynchronous function called `fetchGreetingFromAPI`.

This presents a problem. We want our tests to be fast, while also being predictable. However, imagine if we are on a slow network. That will increase out time to test. Additionally, if the server that contains the `fetchGreetingFromAPI` function were to go down, our test would fail also.

To solve that we create a _fake_ representation of the `fetchGreetingFromAPI` function--a mock function. We'll have see [an example](https://github.com/aquent-it-solutions/deere-testing/blob/todo-final/src/components/SearchForm.test.js#L29) of how to accomplish this later on.

#### End-to-End Testing

End-to-end, or e2e testing is where an application is virtually interacted with to make sure that all the pieces are working together.

If a unit if a piece of code, and an integration is composed of a few units, then an e2e test ensures all the integrations are properly working.

An example would be to ensure that a user can select items on a page to be placed in a cart, and then proceed to checkout and pay for those items. While it's possible to test each piece of code in that regard, the core benefit is ensuring that the process works.

E2E testing is outside the scope of this project, however for reference, frontend applications commonly use one of two tools: [Cypress](https://www.cypress.io/) and [Puppeteer](https://developers.google.com/web/tools/puppeteer).

---
