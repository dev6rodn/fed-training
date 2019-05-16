import overviewMarkdown from './markdown/overview.md'
import whyMarkdown from './markdown/why.md'
import setupMarkdown from './markdown/setup.md'
import componentsIntroMarkdown from './markdown/components-intro.md'
import compositionMarkdown from './markdown/composition.md'
import propsMarkdown from './markdown/props.md'
import stateMarkdown from './markdown/state.md'
import gifLoaderFunctional from './markdown/gif-loader-functional.md'
import moduleChallenge from './markdown/module-challenge.md'

export default [
  {
    id: 1,
    displayName: 'Overview',
    path: '/overview',
    markdown: overviewMarkdown,
  },
  {
    id: 2,
    displayName: 'Why?',
    path: '/why',
    markdown: whyMarkdown,
  },
  { id: 3, displayName: 'Setup', path: '/setup', markdown: setupMarkdown },
  {
    id: 4,
    displayName: 'Intro to Components',
    path: '/components-intro',
    markdown: componentsIntroMarkdown,
    codesandboxUrl: 'https://codesandbox.io/embed/2439x2v9j0?fontsize=14',
  },
  {
    id: 5,
    displayName: 'Composition',
    path: '/composition',
    markdown: compositionMarkdown,
    codesandboxUrl: 'https://codesandbox.io/embed/2jx937w3jy?fontsize=14',
  },
  {
    id: 6,
    displayName: 'Props',
    path: '/props',
    markdown: propsMarkdown,
    codesandboxUrl: 'https://codesandbox.io/embed/o488v4rm5z?fontsize=14',
  },
  {
    id: 7,
    displayName: 'State',
    path: '/state',
    markdown: stateMarkdown,
    codesandboxUrl: 'https://codesandbox.io/embed/lrkoqyj0lm?fontsize=14',
  },
  {
    id: 8,
    displayName: 'Project: Gif Loader',
    path: '/gif-loader-functional',
    markdown: gifLoaderFunctional,
    codesandboxUrl: 'https://codesandbox.io/embed/x3l536r82z?fontsize=14',
  },
  {
    id: 9,
    displayName: 'Module Challenge',
    path: '/module-challenge',
    markdown: moduleChallenge,
    codesandboxUrl: 'https://codesandbox.io/embed/yw6kvn18z1?fontsize=14',
  },
]
