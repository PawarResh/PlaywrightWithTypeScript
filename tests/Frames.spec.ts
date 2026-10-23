import {test,expect,Locator,Frame} from "@playwright/test";

test("handle frames",async({page})=>{

await page.goto("https://ui.vision/demo/webtest/frames/");
/*const frames:Frame[]=await page.frames()
console.log("frames "+ frames.length);

//first approch
const frame:Frame|null=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_2"});
if(frame){

//await frame.locator("[name='mytext2']").fill("hellow"); first way to fill the text box
await frame.fill("[name='mytext2']","hellow");

}*/

await page.frameLocator("[src='frame_1.html']").locator("[name='mytext1']").fill("hellow");


});
test("Inner frame",async({page})=>{

await page.goto("https://ui.vision/demo/webtest/frames/");
const frame:Frame|null=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3"});
                                  
if(frame){

const frames:Frame[]=frame.childFrames()
console.log("frames"+ frames.length);
await frames[0].locator("[class='AB7Lab Id5V1']").first().click();
await page.waitForTimeout(3000);

}
else{
    console.log("frame is null");
}














});