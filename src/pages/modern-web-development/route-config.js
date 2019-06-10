import buildProcessMarkdown from './markdown/build-process.md'
import jsSetupMarkdown from './markdown/javascript-setup.md'
import modularizingDevelopmentMarkdown from './markdown/modularizing-code.md'
import overviewMarkdown from './markdown/overview.md'

export default [
  {
    id: 1,
    displayName: 'Overview',
    path: '/overview',
    markdown: overviewMarkdown,
    next: '/modularizing-code',
  },
  {
    id: 2,
    displayName: 'Modularizing Code',
    path: '/modularizing-code',
    markdown: modularizingDevelopmentMarkdown,
    codesandboxUrl:
      'https://codesandbox.io/embed/o89n31k3y?expanddevtools=1&fontsize=14&hidenavigation=1',
    next: '/js-setup',
    previous: '/overview',
  },
  {
    id: 3,
    displayName: 'Getting Set Up',
    path: '/js-setup',
    markdown: jsSetupMarkdown,
    next: '/build-process',
    previous: '/modularizing-code',
  },
  {
    id: 4,
    displayName: 'Build Process Overview',
    path: '/build-process',
    markdown: buildProcessMarkdown,
    previous: '/js-setup',
  },
]
