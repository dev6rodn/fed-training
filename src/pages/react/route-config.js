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
    displayName: 'Overview',
    path: '/overview',
    markdown: overviewMarkdown,
  },
  {
    displayName: 'Why?',
    path: '/why',
    markdown: whyMarkdown,
  },
  { displayName: 'Setup', path: '/setup', markdown: setupMarkdown },
  {
    displayName: 'Intro to Components',
    path: '/components-intro',
    markdown: componentsIntroMarkdown,
  },
  {
    displayName: 'Composition',
    path: '/composition',
    markdown: compositionMarkdown,
  },
  { displayName: 'Props', path: '/props', markdown: propsMarkdown },
  { displayName: 'State', path: '/state', markdown: stateMarkdown },
  {
    displayName: 'Project: Gif Loader',
    path: '/gif-loader-functional',
    markdown: gifLoaderFunctional,
  },
  {
    displayName: 'Module Challenge',
    path: '/module-challenge',
    markdown: moduleChallenge,
  },
]
