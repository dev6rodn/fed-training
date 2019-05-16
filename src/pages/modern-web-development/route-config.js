import buildProcessMarkdown from './markdown/build-process.md'
import jsSetupMarkdown from './markdown/javascript-setup.md'
import modernDevelopmentMarkdown from './markdown/modern-development.md'
import modularizingDevelopmentMarkdown from './markdown/modularizing-code.md'
import overviewMarkdown from './markdown/overview.md'

export default [
  {
    id: 1,
    displayName: 'Overview',
    path: '/overview',
    markdown: overviewMarkdown,
    next: '/modern-development',
  },
  {
    id: 2,
    displayName: 'Modern Development',
    path: '/modern-development',
    markdown: modernDevelopmentMarkdown,
    next: '/modularizing-code',
  },
  {
    id: 3,
    displayName: 'Modularizing Code',
    path: '/modularizing-code',
    markdown: modularizingDevelopmentMarkdown,
    codesandboxUrl:
      'https://codesandbox.io/embed/o89n31k3y?expanddevtools=1&fontsize=14&hidenavigation=1',
    next: '/js-setup',
  },
  {
    id: 4,
    displayName: 'Getting Set Up',
    path: '/js-setup',
    markdown: jsSetupMarkdown,
    next: '/build-process',
  },
  {
    id: 5,
    displayName: 'Build Process Overview',
    path: '/build-process',
    markdown: buildProcessMarkdown,
  },
]
