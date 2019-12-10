<h1 style="text-align: center; text-decoration: underline">Splitting Up Our Code</h1>

In JavaScript, as with many other languages, keeping code split into logical files is a best-practice used to simplify our need to understand everything at one. This reduces our cognitive load, and helps in error-tracking.

ES2015 added the ability to import and export code from files. Previously, one would have to bother with loading script tags in a particular order or creating global namespaces. For example:

```js
<body>
  <script>console.log(SomeVariableFromFileA)</script>
  <script sr="./fileA.js" />
</body>
```

In the above code block, note that the log statement would print undefined since the code from `fileA` is _after_ the script tags.

Now, referencing code from written in other files is much more straightforward. Let’s look at a few examples in the above Sandbox.

💻Follow the numbers in the sandbox to get a sense of what's happening.💻

### Example Summary

Use named exports whenever possible. Having named exports greatly helps in tooling and error reporting since the names can be confidently referred to. However, if only exporting a single item, or in a file with many named-exports, a default export can be a great way to pull in many parts into a logical place.
