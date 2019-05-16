<h1 style="text-align: center; text-decoration: underline">Preparing for JavaScript Development</h1>

JavaScript developers have historically been very keen on developing in the open and contributing their work to benefit others. Currently, the most common way of doing so is through the use of a package manager called <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">NPM</a>. NPM is a registry that contains prewritten code from other developers and is simple to get started with.

## Installing NodeJS

To get started with NPM, it is recommended to install NodeJS a JavaScript runtime environment. This is because NPM ships with node. To download and install your computer’s version of node,
<a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">visit their site</a> and select the LTS version of NodeJS.

After clicking through the prompts and restarting your terminal if it was up,verify node was correctly installed by typing the following command in your command shell:

`node --version`

At the time of this writing, the current LTS version of node is 10.15.3.

---

## Installing the latest NPM

Now, while still in your command shell, verify that npm was installed by typing the command:

`npm --version`

Currently, the latest version is `6.9.0`.
If your version is less than that, run the following command to get the latest version:

`npm install -g npm`

🎉Congratulations. You’ve just installed your first npm package🎉

NPM is both the name of the registry where remote packages live and also the command to install those packages. Let’s break down the last command:

| npm         | install         | -g                         | npm              |
| ----------- | --------------- | -------------------------- | ---------------- |
| CLI command | argument to use | A flag to install globally | the package name |

🤯npm is used to install npm!

## Local NPM packages

Inside of a current project, let’s initialize it to use NPM. If you don’t have a current project, feel free to running the following bash commands to create one:

```bash
mdkir sample-npm
cd sample-npm
touch index.js
touch .gitignore
```

Now, while in this directory, run the following command: `npm init`
This will walk you through a series of command prompts, in which you can simply hit enter through all of them.

![👆🏾Results from running npm init](./images/npm-init-sample.jpg)

**What’s important to note, is that this command sequence has now created a new file in your directory called package.json. This file showcases meta information about your application.**

---

### ☕️Thanks for sticking with me on this long post😅 Now's a good time to take a break before continuing☕️

Now that your application is ready to use NPM, let’s install a package. Back in your terminal, run the following command:

`npm install uuid`

This package has over 14 million downloads every week and is used to generate safe id's.

Note that a `package-lock.json` file was created. This simply contains information about the version of the package installed. There are also some warnings. These can be safely ignored as they are just about our `package.json` file not having some descriptors.

What’s more important is that this package found **0 vulnerabilities**. One of the great things about NPM is that while anyone can publish a package, NPM screens them for malicious code by a variety of factory. For more insight into what is going on, please see <a href="https://blog.npmjs.org/post/173719309445/npm-audit-identify-and-fix-insecure" target="_blank" rel="noreferrer noopener">this post</a> from the NPM team.

---

## After Installing a Package

Now that the package has been locally installed, your `package.json` file includes a new section called “dependencies” that lists the package name and version. Additionally, the package is now ready to be imported in your application. At this point, it’s usually best to refer to the package’s documentation on what default and named imports are available to you.

Also note, that there is now a local folder in your application that called `node_modules`. This is essentially the source-code to the module you just installed, as well as any dependencies that it depends on...and the dependencies that they depend on! Due to the size of this folder, it is current practice to not commit this to github by adding it to your `.gitignore` file:

```js
// .gitignore file

node_modules/
```

For a more thorough guide on what can be done with NPM, they have excellent video and reading posts <a href="https://docs.npmjs.com/" target="_blank">on their site as well</a>.

IMPORTANT: When importing modules from NPM, there is no need to specify a relative path of any kind. Simply import defaultExportName from ‘package-name’

## Using our package

Now that we have our project setup, our package installed, and `node_modules` ignored, you may be thinking

<blockquote style="color:tomato;">"Finally! Now I can import this package!" </blockquote>

Not quite.

Recall, that while JavaScript has the `import` keyword, modern browsers don't yet know how to support this.

Let's tackle how we can import our UUID's in the next section.
