export const fetchMarkdown = path => {
  return fetch(path).then(res => res.text())
}
