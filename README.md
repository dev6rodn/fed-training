# Frontend Training Material

## Purpose

This project is intended to train modern frontend principles and mechanics to backend developers as it relates to JavaScript.

### Removing Jargon

- **Module**: A group of training sections that encapsulate a broad idea/topic ie. React

- **Section**: A focused topic/idea ie. How to setup React

## Tech Stack

This application is creating using [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started).

Additionally, [codesandbox](https://codesandbox.io) embeds are used to provide code samples.

## Project Details

- **Shared components** such as the `Navbar` and `tableOfContents` are stored in the `src/components` directory.

- **SCSS** is used instead of plain CSS, however this may change since this project also uses css modules and the features that sass offers are not extensively used.

- **Pages** are defined in the `src/pages` directory.

- **Training Content** is created by creating a markdown directory in the desired page directory and creating markdown files.

- **Route Config** is inserted in each **page** directory to scaffold meta information (see file for details)

- **render-sub-page.js** is used to create the module pages based on the route config.

## Conventions and Code Styles

This project makes use of [React Hooks](https://reactjs.org/docs/hooks-intro.html) and forgoes any use of class-based components.

There should be an strong sense to do the following:

- Use codesandbox to display practical code samples
- Begin each section with an `overview.md` file
- Try to answer the why, what, and how to a topic, in that order
- Keep the content simple so that the focus is on the code samples
- Use of emojis, jokes, puns, etc is strongly encouraged to add a personal feel
- All links to outside content open in a new tab

## Issues

If any point something does not appear correctly, filing an ensure will ensure it gets properly addressed while also helping others who have a similar issue.
