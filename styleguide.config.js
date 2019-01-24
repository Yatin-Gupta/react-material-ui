module.exports = {
  components: 'src/components/**/[A-Z]*.tsx',
  propsParser: require('react-docgen-typescript').parse,
  webpackConfig: require('./config/webpack.config.dev')
};
