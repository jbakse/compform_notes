var config = require('./');

module.exports = {

  src: [config.sourceAssets + '/**/*', config.contentAssets + '/**/*.html', config.contentAssets + '/**/*.png', config.contentAssets + '/**/*.svg', config.contentAssets + '/**/*.jpg', config.contentAssets + '/**/*.js', config.contentAssets + '/**/*.css', config.contentAssets + '/**/*.zip', config.contentAssets + '/**/*.woff', config.contentAssets + '/**/*.ttf'],


  dest: config.publicAssets
};
