import {test,expect} from "@playwright/test"

test  ("verify page title",async ({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
let pagetTitle:string = await page.title();
console.log("Page title is: "+pagetTitle);
await expect(page).toHaveTitle(pagetTitle);

})
test("verify Page url",async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
let url:string = await page.url()
await expect(page).toHaveURL(url);


})