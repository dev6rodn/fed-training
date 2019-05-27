<h1 style="text-align: center; text-decoration: underline">🚨Module Challenge: Gif Loader🚨</h1>

This section will take all the topics covered in the previous sections and put them to the test. This module challenge is meant to serve as a practical exercise that simulates what it's like to work in a real-world environment.

## Project Overview

Take a moment to get familiar with the project code above. Specifically, the `index.html` file. If curious to see how the styles are being applied, feel free to look at the `src/styles.css` file as well. Lastly, you'll notice that the `index.js` file is completely empty.

In the browser view, you'll see a search bar with a button, a welcome gif and the link to that gif.

However, if you type in a term like `thanos` into the searchbar and hit enter, you'll notice the following:

- The page reloads
- The new result doesn't appear

**You're challenge is to get this working.**

## Project Insight

To fetch the gif data, you'll need to create an account on <a href="https://developers.giphy.com/" target="_blank">giphy's platform</a>.

- Head to their site and signup/login to their service
- Create an App, making sure to provide a name and description
- Make sure that you are now able to view your API Key.
  - <a href="https://developers.giphy.com/docs/" target="_blank">Review the docs</a> on how to construct your endpoint.

## Project Tasks

```plaintext
Given the search form
When the form is submitted
Then a request is made to fetch a gif
Then the page content is updated to reflect the image and link to the gif
```
