import { defineConfig } from 'cypress';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      CI: string;
    }
  }
}

export default defineConfig({
  e2e: {
    supportFile: './src/support/index.ts',
    videosFolder: '../../dist/cypress/apps/blog-e2e/videos',
    screenshotsFolder: '../../dist/cypress/apps/blog-e2e/screenshots',
    specPattern: './src/integration/**/*.spec.ts',
    modifyObstructiveCode: false,
    fileServerFolder: '.',
    fixturesFolder: './src/fixtures',
    projectId: process.env.CYPRESS_PROJECT_ID,
    chromeWebSecurity: false,
    /**
     * TODO(@nx/cypress): In Cypress v12,the testIsolation option is turned on by default.
     * This can cause tests to start breaking where not indended.
     * You should consider enabling this once you verify tests do not depend on each other
     * More Info: https://docs.cypress.io/guides/references/migration-guide#Test-Isolation
     **/
    testIsolation: false,
  },
  video: Boolean(process.env.CI),
});
