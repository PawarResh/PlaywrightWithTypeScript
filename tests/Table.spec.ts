import {test,expect,Locator}from "@playwright/test";





test("table",async({page})=>{

await page.goto("https://demowebshop.tricentis.com/");
const title:Locator=await page.locator(".product-title");
const num:number=await title.count();
console.log("Number of elements are: "+num);
console.log(await title.nth(0).innerText());
console.log(await title.nth(0).textContent());

for(let i=0;i<num;i++){
console.log(await title.nth(i).innerText());
console.log(await title.nth(i).textContent());

}


})
test("static table",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
const rows:Locator =await page.locator("//table[@name='BookTable']//descendant::tr");
const colon:Locator=await page.locator("//table[@name='BookTable']//descendant::tr[2]/td");
const rowCount:number=await rows.count();
const colonCount :number=await colon.count();

for(let j=1;j<=colonCount;j++){

for(let i=2;i<=rowCount;i++){

const text:Locator=await page.locator("//table[@name='BookTable']//descendant::tr["+i+"]/td["+j+"]");
console.log("text is here "+await text.innerText());
}

}



})