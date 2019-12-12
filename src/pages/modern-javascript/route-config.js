import arraysMarkdown from './markdown/arrays.md'
import asyncJSMarkdownPart1 from './markdown/async-js-1.md'
import asyncJSMarkdownPart2 from './markdown/async-js-2.md'
import overviewMarkdown from './markdown/overview.md'
import functionCompositionMarkdown from './markdown/function-composition.md'
import functionsMarkdown from './markdown/functions.md'
import browserJSPart1Markdown from './markdown/javascript-in-browser-1.md'
import browserJSPart2Markdown from './markdown/javascript-in-browser-2.md'
import moduleChallengeMarkdown from './markdown/module-challenge.md'
import objectsMarkdown from './markdown/objects.md'
import asyncAwaitMarkdown from './markdown/async-await.md'
import understandingThisMarkdown from './markdown/understanding-this.md'
import groupProjectMarkdown from './markdown/group-project.md'
import firstStepsMarkdown from './markdown/first-steps.md'

export default [
  {
    id: 0,
    displayName: 'Overview',
    path: '/overview',
    markdown: overviewMarkdown,
    next: '/first-steps',
  },
  {
    id: 1,
    displayName: '🔥NEW: First Steps🔥',
    path: '/first-steps',
    markdown: firstStepsMarkdown,
    next: '/functions',
    previous: '/overview',
  },
  {
    id: 2,
    displayName: 'Functions',
    path: '/functions',
    markdown: functionsMarkdown,
    codesandboxUrl:
      'https://codesandbox.io/embed/functions-gnls7?fontsize=14&hidenavigation=1&theme=dark',
    previous: '/overview',
    next: '/objects',
  },
  {
    id: 3,
    displayName: 'Objects',
    path: '/objects',
    markdown: objectsMarkdown,
    codesandboxUrl:
      'https://codesandbox.io/embed/objects-nvlv4?fontsize=14&hidenavigation=1&theme=dark',
    previous: '/functions',
    next: '/arrays',
  },
  {
    id: 4,
    displayName: 'Arrays',
    path: '/arrays',
    markdown: arraysMarkdown,
    codesandboxUrl:
      'https://codesandbox.io/embed/arrays-ly6jn?fontsize=14&hidenavigation=1&theme=dark',
    previous: '/objects',
    next: '/javascript-in-the-browser-1',
  },
  {
    id: 5,
    displayName: 'JavaScript in the Browser: part 1',
    path: '/javascript-in-the-browser-1',
    markdown: browserJSPart1Markdown,
    codesandboxUrl:
      'https://codesandbox.io/embed/javascript-in-the-browser-part-1-k5ylb?fontsize=14&hidenavigation=1&theme=dark',
    previous: '/arrays',
    next: '/javascript-in-the-browser-2',
  },
  {
    id: 6,
    displayName: 'JavaScript in the Browser: part 2',
    path: '/javascript-in-the-browser-2',
    markdown: browserJSPart2Markdown,
    codesandboxUrl:
      'https://codesandbox.io/embed/javascript-in-the-browser-part-2-82zmn?fontsize=14&hidenavigation=1&theme=dark',
    previous: '/javascript-in-the-browser-1',
    next: '/async-js-1',
  },
  {
    id: 7,
    displayName: 'Asynchronous JS: part 1',
    path: '/async-js-1',
    markdown: asyncJSMarkdownPart1,
    codesandboxUrl:
      'https://codesandbox.io/embed/async-js-1-ggu00?fontsize=14&hidenavigation=1&theme=dark',
    previous: '/javascript-in-the-browser-2',
    next: '/async-js-2',
  },
  {
    id: 8,
    displayName: 'Asynchronous JS: part 2',
    path: '/async-js-2',
    markdown: asyncJSMarkdownPart2,
    codesandboxUrl:
      'https://codesandbox.io/embed/async-js-2-z83jv?fontsize=14&hidenavigation=1&theme=dark',
    previous: '/async-js-1',
    next: '/function-composition',
  },
  {
    id: 9,
    displayName: 'Function Composition',
    path: '/function-composition',
    markdown: functionCompositionMarkdown,
    codesandboxUrl:
      'https://codesandbox.io/embed/function-composition-epsrn?fontsize=14&hidenavigation=1&theme=dark',
    previous: '/async-js-2',
    next: '/module-challenge',
  },
  {
    id: 10,
    displayName: '🚨 Module Challenge 🚨',
    path: '/module-challenge',
    markdown: moduleChallengeMarkdown,
    previous: '/function-composition',
    codesandboxUrl:
      'https://codesandbox.io/embed/module-challenge-gz1sw?fontsize=14&hidenavigation=1&theme=dark',
    next: '/async-await',
  },
  {
    id: 11,
    displayName: '🔥NEW: Async/Await 🔥',
    path: '/async-await',
    markdown: asyncAwaitMarkdown,
    previous: '/module-challenge',
    next: '/understanding-this',
    codesandboxUrl:
      'https://codesandbox.io/embed/async-await-o97on?fontsize=14&hidenavigation=1&theme=dark',
  },
  {
    id: 12,
    displayName: '🔥NEW: Understanding "this" 🔥',
    path: '/understanding-this',
    markdown: understandingThisMarkdown,
    previous: '/async-await',
  },
  {
    id: 13,
    displayName: '🔥NEW: Group Project 🔥',
    path: '/group-project',
    markdown: groupProjectMarkdown,
    previous: '/understanding-this',
    codesandboxUrl:
      'https://codesandbox.io/embed/chartjs-project-cn6dh?fontsize=14&hidenavigation=1&theme=dark',
  },
]
