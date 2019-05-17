<h1 style="text-align: center; text-decoration: underline">Arrays</h1>

JavaScript arrays are simply a special kind of object in the sense that it is index-based. As such, the most common use cases involve iterating over an array, and displaying a value based on an index. Arrays in JavaScript can hold any number of items, additionally, arrays may contain a mix of any JavaScript types--though this is not a pattern one will often see.

### Iterating over some items

If iterating over some items in an array, a traditional for-loop is preferred (1)

### Iterating over all items

More often, one would find themselves iterating over all items in an array and performing some logic on the individual item. For these situations, JavaScript has the trinity known as map/filter/reduce. These three functions are a more declarative approach to the imperative style of programming found with a for-loop. They each perform similarly and exhibit the following behaviors:

- Each function takes in as its first argument, a callback-function
- Each function will not modify the original array, but rather return a new array, or piece of data, making it much more safe when manipulating data.

<div style="background-color: #E8E8E8; padding: 10px; margin-bottom: 20px">
<h4>Map(2)</h4>

Simply iterates over an array, the callback function takes in the following optional parameters in order and must return an item to be stored in the new array:

- The object being operated on
- The index of the object
- The array being operated on

</div>

<h4>Filter(3)</h4>

Iterates over an array, the callback function takes in the following optional parameters in order and must return a boolean to decide whether or not the current item should be stored in the new array:

- The object being operated on
- The index of the object
- The array being operated on

<div style="background-color: #E8E8E8; padding: 10px">
<h4>Reduce(4)</h4>

Iterates over an array, the goal of this function is to reduce the contents of an array down to a single value. The callback function takes in the following parameters in order:

- An accumulator which is used to track the current value
- The item being iterated upon
- Additionally, this function takes in a second argument after the callback. This is used as a starting point or initializer for the accumulator

</div>
