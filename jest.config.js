module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.vue',
    '<rootDir>/src/pages/**/*.vue',
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!@babel/runtime-corejs2)'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/test/setup.js'
  ],
}
