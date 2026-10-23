import {test,expect,Locator,FrameLocator, Frame} from "@playwright/test";


test("class 1",async ({page})=>{

/*await page.goto("https://testautomationpractice.blogspot.com/");
//locator does not return promise 
const alr:Locator= page.getByAltText("this locators takes value of alt attrubute this attribute is present for images ");//
const text:Locator=page.getByText("visible text like xpath for non ineractable element simple text");
const rol:Locator=page.getByRole('checkbox',{name:'visible text'});// this locator takes two paramerer , role and visible text of role
const label:Locator=page.getByLabel("visible text of label tag ");
const placeholder:Locator=page.getByPlaceholder("attribute value of placeholder");
const testId:Locator= page.getByTestId("value of test id attribute");
const title:Locator=page.getByTitle("value of title attribute");*/

/*await page.goto("https://ui.vision/demo/webtest/frames/");
const  el:FrameLocator = page.frameLocator("//frame[@src='frame_1.html']");
await el.locator("[type='text']").first().fill("Reshma");
await page.waitForTimeout(2000);*/

/* wait page.goto("https://ui.vision/demo/webtest/frames/")
const el2:Frame|null=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_2"});
if(el2){
const el:Locator= el2.getByText("[name='mytext2']");
await el.fill("pawar");
}
await page.waitForTimeout(2000);*/
await page.goto("https://ui.vision/demo/webtest/frames/");
/*const frame:Frame|null=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3'});
if(frame){
const dd:Frame[]=frame.childFrames();
const ss:Locator= dd[0].locator("//div[@class='AB7Lab Id5V1'][1]").first();
await ss.check();
await page.waitForTimeout(5000);
console.log("check button successfully");*/


const ff:FrameLocator=page.frameLocator("[src='frame_3.html']");
const loca:FrameLocator=ff.frameLocator("//iframe[@marginheight='0'][1]").first();
const loc:Locator=loca.locator("//div[@class='AB7Lab Id5V1'][1]").first();
await loc.check();










});