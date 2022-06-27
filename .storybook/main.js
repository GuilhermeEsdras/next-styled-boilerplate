const path = require("path")

module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/react',
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    config.resolve.alias['@components'] = path.resolve(__dirname, '../src/components')
    config.resolve.alias['@pages'] = path.resolve(__dirname, '../src/pages')
    config.resolve.alias['@styles'] = path.resolve(__dirname, '../src/styles')
    config.resolve.alias['@templates'] = path.resolve(__dirname, '../src/templates')
    config.resolve.alias['@types'] = path.resolve(__dirname, '../src/types')
    config.resolve.alias['@utils'] = path.resolve(__dirname, '../src/utils')
    config.resolve.alias['@src'] = path.resolve(__dirname, '../src')
    return config;
  }
};
