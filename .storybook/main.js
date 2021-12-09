var path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  // https://github.com/storybookjs/storybook/issues/11989#issuecomment-841801366
  "webpackFinal": async (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src')
    return config
  }
}