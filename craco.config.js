const CracoLessPlugin = require('craco-less');

module.exports = {
  eslint: {

    enable: false

  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#4fd1b1',
          '@border-radius-base':'20px' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
