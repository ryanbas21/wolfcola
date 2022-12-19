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
    },
    video: Boolean(process.env.CI)
})