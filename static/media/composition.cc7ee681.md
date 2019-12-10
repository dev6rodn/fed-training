<h1 style="text-align: center; text-decoration: underline; margin-top: 50px">Declarative Composition</h1>

<blockquote style="font-style: italic; color: gray">
"React makes you a better JavaScript Developer"
</blockquote>

This line gets repeated a lot in the JavaScript and React community. A large reason is because of how little _magic_ occurs with React. Where some frameworks use their own methods that take care of looping, data-fetching etc. React relies on safe JavaScript methods to do so. We'll see examples of this in the upcoming sections.

In this section we'll look at how React helps with code organization by favoring composition. This idea relates to what we learned in the <a href="/learning-tracks/modern-javascript/function-composition" target="_blank">JavaScript composition section</a>. Composition simply means one can build their UI by constructing small, reusable pieces and then putting them together based on their project needs.

<blockquote style="font-style: italic; color: gray">
"The trick to building large apps is to not to! Instead, build large apps by composing small apps together"

--Michael Florence, creator of Reach Router

</blockquote>

## Rebuilding Gif Loader

Recall the Gif Loader application from the <a href="/learning-tracks/modern-javascript/module-challenge" target="_blank">JavaScript module</a>.

We'll rebuild that project across the next sections to get familiar with React and its features. In doing so, we'll take the following approach, which happens to be the recommended approach when building out UI applications:

1. Identify the components
1. Build the UI based on those components, add mock data if necessary
1. Wire up the components to talk to one another
1. Use real data to finalize behavior
1. Style application to finalize Design

Each section will start off with the contents of the previous section. Since this is the first one, we have a pretty blank slate 😅. Lastly, if going at your own pace, there is a `solution` directory that will contain the section's related files. Check the `readme.md` file in that directory for notes/instructions.
