# Frontend Training Material

[Live Course Link](https://master.d1izkauzq6r5zu.amplifyapp.com/)

## Purpose

This project is intended to train modern frontend principles and mechanics to backend developers as it relates to JavaScript.

### Removing Jargon

- **Module**: A group of training sections that encapsulate a broad idea/topic ie. React

- **Section**: A focused topic/idea ie. How to setup React

## Tech Stack

This application is creating using [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started) and [AWS Amplify](https://aws-amplify.github.io/). Additionally, hosting, and CI/CD pipeline are provided by the [AWS Amplify Console](https://aws.amazon.com/amplify/console/).

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

## Contributing

- Setup the [AWS Amplify CLI](https://aws-amplify.github.io/docs/)
- Fork this repo and bring it down locally
- In your local version:
  - Checkout the `development` branch
  - run `git checkout -b <YourName-FED-Training>`
  - Run `amplify init` and follow the prompts
  - When asked if wanting to use a profile, use a profile if created, otherwise create one
  - Setup a cognito pool by running `amplify add auth` and accepting all defaults
  - Ensure that a `aws-exports.js` file was created
  - Run `amplify console` and select `auth` and select `User Pool`
- In the AWS Console:
  - On the right hand side of your User Pool, select `Users and groups`
  - Select the `Create user` button
  - Create a user with a complex password
- Back in your application:
  - Run `npm start`
  - On the login screen, enter the newly created user and change is password is prompted.

## Issues

If any point does not appear correctly, filing an ensure will ensure it gets properly addressed while also helping others who have a similar issue.
