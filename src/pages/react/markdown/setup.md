---
section: 'React'
next: 'components-intro'
---

<h1 style="text-align: center; text-decoration: underline; margin-top: 50px">Setting Up A React Application</h1>

As discussed in the <a href="/learning-tracks/modern-web-development/build-process" target="_blank" rel="noopener noreferrer">supporting different environments</a> section, setting up a modern application can be quite involved to say the least 😅

Fortunately, when joining a team, this process will most likely be done already. Otherwise, when developing on your own, the process is quite repetitive. So repetitive in fact, that many configurations have been made so that we don't have to do that part ourselves. These configurations are from reputable sources and those that are actively engaged in the open-source community.

## [Parcel](https://parceljs.org/)

As we saw in the last section, Parcel can be used to quickly create modern applications. If you have a vanilla JavaScript application running and would like to begin developing in React, you'll be pleased to know that Parcel supports that too. Just install `react` and `react-dom` and begin development.

> 🔥While developing a running application, simply importing a module will download and install it from NPM🔥

## [CodeSandbox](https://codesandbox.io/)

This one will hopefully look familiar. CodeSandbox allows someone to choose from many popular templates to get started building an application. The service integrates with your GitHub repos, allows for live collaboration, and has a generous free plan. This is definitely where I recommend getting started at if you're starting a new project.

## [Create React App](https://facebook.github.io/create-react-app/)

One of the templates that codesandbox usues. When you're wanting to start working in teams, support custom features, or work on a client application, Create React App has quickly become the default choice for many. This project is open-sourced by Facebook's React team and is keeps up with the pace of React itself.

If wanting to start an application locally that uses `create-react-app`, running the following command in your terminal will do all the work for you:

`npx create-react-app PROJECT_NAME`

## Conclusion

There are more scaffolding tools out there! However, which ones you use mainly depend on your use case and what you project needs are. In the following sections, the examples will be in codeSandbox, however if wanting to use create-react-app, that would serve an equal purpose.
