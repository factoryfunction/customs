const presets = require('./config/babel/presets')

// const customElements = {
//   test: /(elements\/.+\.tsx)$/,
//   presets: [presets.typeScript, presets.react, presets.env],
//   plugins: [
//     presets.jsx,
//     presets.decorators,
//     ['@babel/plugin-proposal-class-properties', { loose: true }],
//     '@babel/plugin-syntax-dynamic-import',
//   ],
// }

module.exports = {
  presets: [presets.typeScript, presets.react, presets.env],
  plugins: [
    presets.runtime,
    // presets.jsx,
    presets.decorators,
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-syntax-dynamic-import',
  ],
  // overrides: [customElements],
}
