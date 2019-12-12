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
    codesandboxUrl:
      'https://codesandbox.io/embed/shy-thunder-u4udb?fontsize=14&hidenavigation=1&theme=dark',
    previous: '/overview',
  },
]
