// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = JSON.parse(JSON.stringify(require('../eslint.config')))

config.parser = '@typescript-eslint/parser'

config.plugins.push('@typescript-eslint')

config.extends.push(
  'eslint:recommended',
  'plugin:prettier/recommended',
  'plugin:@typescript-eslint/recommended'
)

module.exports = config
