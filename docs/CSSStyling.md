#CSS Styling

This project uses webpack to process it's CSS and [PostCSS](http://postcss.org) is used to handle this.

Following plugins are used in PostCSS:
- Autoprefixer
- Precss

New plugins can be added by installing them through NPM and then adding them to [webpack.config.js](../webpack.config.js).
```
postcss: function () {
    return [
      precss,
      autoprefixer({
        browsers: ['last 3 versions']
      })];
  }
```