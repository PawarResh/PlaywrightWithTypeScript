
import {test,expect,Locator} from "@playwright/test"


test("Locatores",async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
/*const logo:Locator=  page.getByAltText("company-branding");
console.log(await logo.textContent());
await expect(logo).toBeVisible();

const text:Locator= page.getByText("Password : admin123");
await expect(text).toBeVisible();
await expect(page.getByText("Password : admin123")).toBeVisible();

const role:Locator=page.getByRole("button",{name:" Login "});*/
//await expect(page.getByTitle("pass value of title attribute")).toBeVisible();
//await page.getByLabel("Username").fill("Reshma"); 
/*await expect(page.getByPlaceholder("Username").first()).toBeVisible();
await page.getByRole("button",{name:" Login "}).click();
await expect(page.getByTestId("value of tets id attribute")).toHaveText("email");*/
//await page.getByRole("button",{name:/stop|start/}).click();
/*const admin:Locator=page.locator("//input[@name='username']");
await admin.fill("Reshma");

const admin1:Locator=page.locator("//a[@target='_blank']");
const num:number= await admin1.count();
await expect(num).toBeGreaterThan(0);
console.log("Number of elements are: "+num);
console.log("print: "+await admin1.nth(0).textContent());
console.log("print: "+await admin1.first().textContent());
console.log("print:"+ await admin1.last().textContent());
console.log("print: "+await admin1.allTextContents());
const products:string[]= await admin1.allTextContents();
for(let il of products){

console.log("print: "+il)

}*/
const text:Locator= page.getByText("Password : admin123");
await expect(text).toHaveText("Password : admin123");
await expect(text).toHaveText(/Password : /);// / will will work like partialtext 
await expect(text).toContainText("Password :");
await expect(page.locator("//div[@id='oxd-toaster_1']")).toHaveAttribute("id","oxd-toaster_1");


})