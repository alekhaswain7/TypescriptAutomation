const { test, expect } = require('@playwright/test');
const { text } = require('stream/consumers');
 
 
 
 
test('@Web Client App login1', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "alekhaswain7@gmail.com";
   const productName = 'ADIDAS ORIGINAL';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type("Alekha@123");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   const count = await products.count();

   for(let i=0; i<count; ++i)

      {
       if (await products.nth(i).locator('b').textContent() === productName)
         {
            await products.nth(i).locator("text=  Add To Cart").click();
            break;
         }
      }
      await page.locator("[routerlink*='cart']").click();
      await page.locator('div li').first().waitFor();
      const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
      expect(bool).toBeTruthy();
      await page.locator("text=Checkout").click();
      await page.locator("[placeholder*= 'Country']").pressSequentially("ind",{delay:100});
      const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for 
   (let i = 0; i < optionsCount; ++i) 
   {

      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India")
      {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);

   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
  

})