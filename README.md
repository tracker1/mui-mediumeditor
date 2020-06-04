# mui-mediumfield
Material-UI input field for rich text using medium-editor

## Work In Progress

This is starting based on some effort on a project I'd been working on. Here's a demonstration on Code Sandbox.
https://codesandbox.io/s/mui-medium-editor-7ukf2

I used the medium-editor, turndown and marked library and integrated it (roughly) with a formcontrol/input component... I started with the TextField component and modified it, needs a lot of cleanup.  The input/output is markdown, but figure that could/should be optional.

## TODO

- [ ] Create library bundle with peer dependencies to use mui
- [ ] Cleanup/Reduce extraneous options that aren't applicable
- [ ] Use mui theme to stylize the context toolbar
- [ ] Toolbar Icons
- [ ] Markdown/Html value type option
- [ ] Passthrough options for medium-editor
- [ ] Passthrough options for turndown
- [ ] Passhtrough options for marked
- [ ] Async loading of dependencies
- [ ] Publish for CDN use
