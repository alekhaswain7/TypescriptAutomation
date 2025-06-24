// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { permission } from 'process';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  retries: 1,
  worker: 2,
  timeout: 30000 ,
  expect: {
    timeout: 5000,
  },
  reporter: 'html',
  projects : [

{
      name : 'Safari',
      use: {

    browserName: 'webkit',
    headless: true,
    Screenshot: 'on',
    trace: 'retain-on-failure',
    ...devices['iPhone 11'],
   
  }
},

{
  name : 'Chrome',
  use: {

    browserName: 'chromium',
    headless: false,
    ignoreHttpsErrors: true,
    permission: 'geolocation',
    video: 'retain-on-failure',
    Screenshot: 'off',
    trace: 'retain-on-failure',
    viewport: {width:720, Height:720}
}
}
    
  ]

  
   

  
});
module.exports = config
