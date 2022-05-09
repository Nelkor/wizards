// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = JSON.parse(JSON.stringify(require('../eslint.config')))

config.env.browser = true

config.extends.push(
  'plugin:vue/vue3-recommended',
  '@vue/typescript/recommended'
)

config.rules = {
  ...config.rules,

  'vue/html-self-closing': [
    'error',
    {
      html: {
        void: 'always',
        normal: 'always',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    },
  ],
  'vue/attributes-order': 2,
  'vue/order-in-components': 2,
  'vue/no-empty-component-block': 2,
  'vue/max-attributes-per-line': 0,
  'vue/singleline-html-element-content-newline': 0,
}

module.exports = config
