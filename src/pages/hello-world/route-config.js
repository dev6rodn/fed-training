import overviewMarkdown from './markdown/overview.md'
import HTMLBasicsMarkdown from './markdown/html-basics.md'
export default [
  {
    id: 1,
    displayName: 'Overview',
    path: '/overview',
    markdown: overviewMarkdown,
    next: '/html-basics',
  },
  {
    id: 2,
    displayName: 'HTML Basics',
    path: '/html-basics',
    markdown: HTMLBasicsMarkdown,
    codesandboxUrl: 'https://codesandbox.io/embed/static-r65o1?fontsize=14',
    previous: '/overview',
  },
]
