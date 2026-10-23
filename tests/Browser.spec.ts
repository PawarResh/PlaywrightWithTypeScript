import {test,expect,Frame,Locator, chromium, Browser, BrowserContext, Page} from "@playwright/test";


/*test("browser",async({})=>{

const brow1:Browser= await chromium.launch();
const con1:BrowserContext= await brow1.newContext();
const page:Page=await con1.newPage();
(await page).goto("");

})
test("browser",async({browser})=>{
const con1:BrowserContext= await browser.newContext();
const page:Page=await con1.newPage();
await page.goto("");

})
test("browser",async({context})=>{
const page:Page=await context.newPage();
await page.goto("");

})
test("browser",async({page})=>{
await page.goto("");

})*/

test("Broswer tabs",async({context})=>{

const page1=await context.newPage();
await page1.goto("https://testautomationpractice.blogspot.com/");
const [page2]=await Promise.all([context.waitForEvent("page"),page1.locator("//button[text()='New Tab']").click()]);

const nc:Locator= page2.locator("//h1[normalize-space(text='SDET-QA Blog')]");
await expect(nc).toBeVisible();
})

test("Op up now",async({context})=>{

const page1=await context.newPage();
await page1.goto("https://testautomationpractice.blogspot.com/");
const [childPage]=await Promise.all([page1.waitForEvent("popup"),page1.locator("//button[@onclick='return popup()']").click()])

const ch:Locator=childPage.locator("//span[@class='navbar-logo']");
await expect(ch).toBeVisible();
const date:number=Date.now();
await childPage.screenshot({path:"Sscreenshot/"+date+".png",fullPage:true});












})