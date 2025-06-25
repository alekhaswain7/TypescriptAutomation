const { test, expect} = require ('@playwright/test');
const { text } = require('stream/consumers');

test ('Real Login Page', async ({page})=>{

const email = "alekhaswain7@gmail.com";
const firstName ="Alekha";
const lastName ="Swain";
const username ="Alekhaswain7";
const password = "Alekha@123";
const dropDown= page.locator('#mantine-ul6uvfd1i').click();

await page.goto("https://bolt.playrealbrokerage.com/");

await page.locator('.mt-3').first().click();

await page.locator('#mantine-gnql4pwfu').fill(firstName);
await page.locator('#mantine-tgp6p3909').fill(lastName);
await page.locator('#mantine-f1jkcl65g').fill(username);
await page.locator('#mantine-62bvuodhj').fill(email);
await page.locator('#mantine-ul6uvfd1i').click();
await page.dropDown.selectOption("Canada");
//

await page.locator('#mantine-k6fnrd8xv').fill(password);
await page.locator('#mantine-m59d4x91f').fill(password);
expect(page.locator('#mantine-m59d4x91f')).toHaveText(password);
await page.locator('#mantine-ynxiiiyz8').click();
expect(page.locator('#mantine-ynxiiiyz8')).toBeChecked();

await page.locator('#mantine-fvi404hnc').click();
expect(page.locator('#mantine-fvi404hnc')).toBeChecked();

await page.locator("text=Create Account").click();










}

)