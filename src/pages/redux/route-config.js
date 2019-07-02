import overviewMarkdown from './markdown/overview.md'
import whyMarkdown from './markdown/why.md'
import principlesMarkdown from './markdown/principles.md'
import actionsMarkdown from './markdown/actions.md'
import reducersMarkdown from './markdown/reducers.md'
import reactReduxMarkdown from './markdown/react-redux.md'
import groupProjectMarkdown from './markdown/group-project.md'
import moduleChallengeMarkdown from './markdown/module-challenge.md'

export default [
  {
    id: 1,
    displayName: 'Overview',
    path: '/overview',
    markdown: overviewMarkdown,
    next: '/why',
  },
  {
    id: 2,
    displayName: 'Why Redux?',
    path: '/why',
    markdown: whyMarkdown,
    previous: '/overview',
    next: '/principles',
  },
  {
    id: 3,
    displayName: 'Redux Principles',
    path: '/principles',
    markdown: principlesMarkdown,
    previous: '/why',
    next: '/actions',
  },
  {
    id: 4,
    displayName: 'Actions',
    path: '/actions',
    markdown: actionsMarkdown,
    previous: '/principles',
    next: '/reducers',
  },
  {
    id: 5,
    displayName: 'Reducers',
    path: '/reducers',
    markdown: reducersMarkdown,
    previous: '/actions',
    next: '/redux-with-react',
  },
  {
    id: 6,
    displayName: 'Redux with React',
    path: '/redux-with-react',
    markdown: reactReduxMarkdown,
    codesandboxUrl:
      'https://codesandbox.io/embed/example-flow-xq1dx?expanddevtools=1&fontsize=14&hidenavigation=1',
    previous: '/reducers',
    next: '/group-project',
  },
  {
    id: 7,
    displayName: 'Group Project',
    path: '/group-project',
    markdown: groupProjectMarkdown,
    previous: '/redux-with-react',
    next: '/module-challenge',
  },
  {
    id: 8,
    displayName: '🚨 Module Challenge 🚨',
    path: '/module-challenge',
    previous: '/group-project',
    markdown: moduleChallengeMarkdown,
  },
]
