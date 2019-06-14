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

export default [
  {
    id: 1,
    displayName: 'Overview',
    path: '/overview',
    markdown: overviewMarkdown,
    next: '/functions',
  },
  {
    id: 2,
    displayName: 'Functions',
    path: '/functions',
    markdown: functionsMarkdown,
    codesandboxUrl:
      'https://codesandbox.io/embed/zr9wj0o6kl?expanddevtools=1&fontsize=14&hidenavigation=1',
    previous: '/overview',
    next: '/objects',
  },
  {
    id: 3,
    displayName: 'Objects',
    path: '/objects',
    markdown: objectsMarkdown,
    codesandboxUrl:
      'https://codesandbox.io/embed/13n0970vml?expanddevtools=1&fontsize=14&hidenavigation=1',
    previous: '/functions',
    next: '/arrays',
  },
  {
    id: 4,
    displayName: 'Arrays',
    path: '/arrays',
    markdown: arraysMarkdown,
    codesandboxUrl:
      'https://codesandbox.io/embed/3v165v805?expanddevtools=1&fontsize=14&hidenavigation=1',
    previous: '/objects',
    next: '/javascript-in-the-browser-1',
  },
  {
    id: 5,
    displayName: 'JavaScript in the Browser: part 1',
    path: '/javascript-in-the-browser-1',
    markdown: browserJSPart1Markdown,
    codesandboxUrl:
      'https://codesandbox.io/embed/zrznv23xl?expanddevtools=1&fontsize=14&hidenavigation=1',
    previous: '/arrays',
    next: '/javascript-in-the-browser-2',
  },
  {
    id: 6,
    displayName: 'JavaScript in the Browser: part 2',
    path: '/javascript-in-the-browser-2',
    markdown: browserJSPart2Markdown,
    codesandboxUrl: 'https://codesandbox.io/embed/ypnpr0rzvv?fontsize=14',
    previous: '/javascript-in-the-browser-1',
    next: '/async-js-1',
  },
  {
    id: 7,
    displayName: 'Asynchronous JS: part 1',
    path: '/async-js-1',
    markdown: asyncJSMarkdownPart1,
    codesandboxUrl:
      'https://codesandbox.io/embed/k35w0nv003?expanddevtools=1&fontsize=14&hidenavigation=1',
    previous: '/javascript-in-the-browser-2',
    next: '/async-js-2',
  },
  {
    id: 8,
    displayName: 'Asynchronous JS: part 2',
    path: '/async-js-2',
    markdown: asyncJSMarkdownPart2,
    codesandboxUrl:
      'https://codesandbox.io/embed/mm457lvjmp?expanddevtools=1&fontsize=14&hidenavigation=1',
    previous: '/async-js-1',
    next: '/function-composition',
  },
  {
    id: 9,
    displayName: 'Function Composition',
    path: '/function-composition',
    markdown: functionCompositionMarkdown,
    codesandboxUrl:
      'https://codesandbox.io/embed/wom9yv00jw?expanddevtools=1&fontsize=14&hidenavigation=1',
    previous: '/async-js-2',
    next: '/module-challenge',
  },
  {
    id: 10,
    displayName: 'Module Challenge',
    path: '/module-challenge',
    markdown: moduleChallengeMarkdown,
    previous: '/function-composition',
    codesandboxUrl: 'https://codesandbox.io/embed/nxk0rj5wm?fontsize=14',
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
      'https://codesandbox.io/embed/asyncawait-5cey1?expanddevtools=1&fontsize=14&view=editor',
  },
  {
    id: 12,
    displayName: '🔥NEW: Understanding "this" 🔥',
    path: '/understanding-this',
    markdown: understandingThisMarkdown,
    previous: '/async-await',
  },
]
