module.exports = (api) => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        debug: true,
        useBuiltIns: 'usage',
        modules: false
      }
    ],
    '@babel/preset-react'
  ];

  const plugins = [
    '@babel/plugin-proposal-class-properties'
  ];

  return {
    presets,
    plugins
  }
};
