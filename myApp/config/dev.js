const mocks = require('../mock/index');

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  plugins: [
		['@tarojs/plugin-mock', {
			mocks
		}]
	],
  h5: {}
}
