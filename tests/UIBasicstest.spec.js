const {test, expect} = require('@playwright/test');

test('Browser Context Playwright test', async ({browser})=>
{

    //Playwrights codes
    //chrome -- plugin/cookies
    
    const context = await browser.newContext() ;
    const page = await context.newPage();
    const userName = page.locator('#username');
    const signIn = page.locator('#signInBtn');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log (await page.title());
    await userName.fill("Rahulshetty");
    await page.locator("[type='password']").fill("learing");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    //LogIn With valid credentials

    // await userName.fill("");
    // await userName.fill("rahulshettyacademy");
    // await signIn.click();
    // console.log(await page.locator(".card-body a").first().textContent());
    // console.log(await page.locator(".card-body a").nth(1).textContent());



});

test('UI controls', async ({page})=>
    {
    
        // await page.goto("https://google.com");
        // console.log (await page.title());
        // await expect(page).toHaveTitle("Google");

        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const documentLink = page.locator("[href*='documents-request']");
        const userName = page.locator('#username');
        const signIn = page.locator('#signInBtn');
        const dropdown = page.locator("select.form-control");
        await dropdown.selectOption("consult");
        await page.locator('.radiotextsty').last().click();
        await page.locator('#okayBtn').click();
        console.log(await page.locator('.radiotextsty').last().isChecked());
        await expect(page.locator('.radiotextsty').last()).toBeChecked();

        await page.locator("#terms").click();
        await expect(page.locator("#terms")).toBeChecked();
        await page.locator("#terms").uncheck();
        expect(await page.locator("#terms").isChecked()).toBeFalsy();

        await expect(documentLink).toHaveAttribute("Class","blinkingText");
        //Assertion
        //await page.pause();
    
    });

    test('Child window handle', async ({ browser }) =>
    
    {

            const context = await browser.newContext();
            const page = await context.newPage();
            //page.route('**/*.css', route=>route.abort());
            const userName = page.locator('#username');
            await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
            const documentLink = page.locator("[href*='documents-request']");

            const [newPage] = await Promise.all(
                [
                    context.waitForEvent('page'), //listen for any new page pending,rejected,fulfilled
                    documentLink.click(),
                ]); //new page is opened


            const text = await newPage.locator(".red").textContent();
            const arrayText = text.split("@");
            const domain = arrayText[1].split(" ")[0];
            console.log(domain);
            await page.locator("#username").fill(domain);
            console.log(await page.locator("#username").textContent());

        })