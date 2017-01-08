var config = require('./')

module.exports = {
  watch: [config.contentAssets + '/**/*.md', config.sourceAssets + "/layouts/default.html"],
  src: [config.contentAssets + '/**/*.md'],
  dest: config.publicAssets,
  template: config.sourceAssets + "/layouts/default.html"
}
