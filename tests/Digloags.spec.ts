import {test,expect,Locator} from "@playwright/test";
test("Simple  dialog ",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

page.on("dialog",async (dialog)=>{
    await expect(dialog.type()).toContain("alert");
    await expect(dialog.message()).toContain("am an alert box!");

    console.log("dialog"+dialog.type());
    console.log("dialog message"+dialog.message());
    dialog.accept();




});

await page.locator("#alertBtn").click();
await page.waitForTimeout(4000);


})