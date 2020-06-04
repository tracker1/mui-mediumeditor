# mui-mediumfield
Material-UI input field for rich text using medium-editor

[Demonstration](https://codesandbox.io/s/mui-medium-editor-7ukf2)

This is starting based on some effort on a project I'd been working on. Here's a demonstration on Code Sandbox. This will be updated to demonstrate this component's usage once it's been published.  The use of markdown will be removed from the core component used from outside the component in the demo for a usage example.

### Version 0.x.x

While in initial development, until v1, there will be breaking changes... If you use this, you should pin to a specific version and update once 1.0.0 is released, from there, I will work with semver releases.

### Dependencies

This component would not exist without the work on the following modules.

* [material-ui](https://material-ui.com/) for theming and making this look like other form fields.
* [medium-editor](http://yabwe.github.io/medium-editor/) for the contenteditable interactions, toolbar, etc.

## Usage Notes

I'm intending for this to be used with a bundler.  May source in typescript and output to esm for use with downstream bundlers.  For downstream users, this means using parcel/webpack to use this component.  The dependencies for the editor and markdown/html handling are relatively large and loading dynamically will reduce the impact on upstream applications using these components.

## TODO

- [ ] Create library bundle with peer dependencies to use mui
- [ ] Github CI/CD integration
- [ ] Cleanup/Reduce extraneous options that aren't applicable
- [ ] Use mui theme to stylize the context toolbar
- [ ] Toolbar Icons
- [ ] Passthrough options for medium-editor
- [ ] Async loading of dependencies
- [ ] Publish for CDN use

## Extended features/use cases

- [ ] Image Upload/Integration
- [ ] Image drop support


