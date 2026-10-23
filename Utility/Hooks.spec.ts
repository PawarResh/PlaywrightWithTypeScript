import {test} from "@playwright/test";
import { BaseURL } from "./envConfig";


test.beforeEach("Open browser and enter url",async({page})=>{
await page.goto(BaseURL);
})

test.afterEach("close browser ",async({page})=>{
await page.close();
})