---
section: 'React'
next: 'setup'
---

<h1 style="text-align: center; text-decoration: underline; margin-top: 50px">Why Use React</h1>

As with any new tool, the first question must be the _"Why?"_. The JavaScript ecosystem is full of frontend frameworks. So in a sea of opinions, what makes React the framework of choice?

## Virtual DOM

When updating content on a traditional webpage, the entire view must be updated and redrawn. React has a concept called a virtual DOM. This means snapshots are taken of the screen and when an update occurs, the snapshots are compared and only the differing sections are updated. This helps in performance.

## Composition

Often times, we would like our applications to look and feel according to a certain design or aesthetic. This usually means reusing components such as forms, buttons, etc. React follows this design process by allowing us to compose UI much like Lego pieces are put together.

## Richer Experience

Single page applictions (SPA's) in general, are a favorable approach since the screen doesn't reload for every page request. This means we can now have UX improvements such as animated page transitions and UI elements that remain on the page <a href="https://soundcloud.com/discover" target=_blank>across page routes</a>.

## Problems Introduced with an SPA

I would be remiss if I didn't also bring attention to the problems that arise when using a framework like React. All can be alleviated with a well architected application, however for those new to this area, it may be difficult to resolve:

- Large initial JavaScript bundle
- Poor SEO performance
