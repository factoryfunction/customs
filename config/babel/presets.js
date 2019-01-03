module.exports.jsx = ['@babel/plugin-transform-react-jsx', { pragma: 'DOM.h' }]
module.exports.typeScript = '@babel/preset-typescript'
module.exports.react = '@babel/preset-react'
module.exports.runtime = '@babel/plugin-transform-runtime'
module.exports.decorators = ['@babel/plugin-proposal-decorators', { legacy: true }]

module.exports.env = [
  '@babel/preset-env',
  {
    // experimentalDecorators: true,
    loose: true,
    modules: false,
    useBuiltIns: 'entry',
    debug: true,
    targets: {
      browsers: '> 0.25%, not dead',
    },
    exclude: ['transform-classes'],
  },
]
