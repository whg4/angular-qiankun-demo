const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const webpackMerge = require('webpack-merge');

module.exports = (config, options) => {
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  const singleSpaConfig = {
    output: {
      library: `subapp1-[name]`,
      libraryTarget: 'umd',
    },
    externals: {
      'zone.js': 'Zone',
    },
  };

  const mergedConfig = webpackMerge.merge(singleSpaWebpackConfig, singleSpaConfig);
  return mergedConfig;
};
