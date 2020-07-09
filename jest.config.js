module.exports = {
  testEnviroment: 'jsdom',
  testPathIgnoraPatterns: ['/node_modules/', '.next'],
  collectCoverage: true,
  collectCoverageFrom: ['scr/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
