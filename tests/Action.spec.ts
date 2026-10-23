import {test,expect,Locator} from "@playwright/test"

test("input field",async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/");

const textBox:Locator=page.locator("//input[@id='name']");
await expect(textBox).toBeVisible();
await expect(textBox).toBeEnabled();
const length1:string|null = await textBox.getAttribute("maxlength");
await expect(length1).toBe("15");
await textBox.fill("Reshma"); 
await page.waitForTimeout(2000);
console.log("Text box shoud have this value"+ await textBox.inputValue());
const na:string =await textBox.inputValue();
await expect(na).toBe("Reshma");

})
test.only("redio buttons",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
  const radio:Locator=page.locator("#male");
  const isC:boolean= await radio.isChecked();
  await expect(isC).toBeFalsy();
    await radio.check();
    await expect(radio.isChecked()).toBeTruthy();

await expect(radio).toBeChecked();

})
test("check box",async({page})=>{

await page.goto("");
const check:Locator=page.locator("#sunday");
const isC:boolean = await check.isChecked();
await expect(isC).toBeFalsy();
await check.check();
const i:boolean=await check.isChecked();
await expect(i).toBeTruthy();
await check.uncheck();
await expect(isC).toBeFalsy();
// one way to check all check boxes
const allE:Locator[]=await page.locator("//input[@type='checkbox']").all();
for(const el of allE){;https://testautomationpractice.blogspot.com/
await el.check();
}
})
test("select",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

const select:Locator=await page.locator("#country");
await select.selectOption({value:"uk"});
await page.waitForTimeout(2000);
await select.selectOption("Canada");
await page.waitForTimeout(2000);
await select.selectOption({label:"Brazil"})
await page.waitForTimeout(2000);
await select.selectOption({index:3});
await page.waitForTimeout(2000);

const multi:Locator=await page.locator("#colors");
await multi.selectOption([{value:"red"},{label:"Yellow"},{index:5}]);
await multi.selectOption(["White","Red"]);
await page.waitForTimeout(2000);

})

test("auto suggest drodown",async({page})=>{

await page.goto("https://www.flipkart.com/");
await page.waitForTimeout(5000);
await page.locator("//span[@role='button']").click();
const sarch:Locator=await page.locator("button[type='submit']+div>input[title='Search for Products, Brands and More']");
await sarch.fill("smart");
await page.waitForTimeout(5000);
const opt:Locator= await page.locator("ul>li")
const cont:number= await opt.count();
console.log("count is "+ cont)
console.log(await opt.nth(5).innerText());

for(let i=0;i<=cont;i++){
console.log(await opt.nth(i).innerText());

}


})