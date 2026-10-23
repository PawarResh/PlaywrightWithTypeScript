import {test,expect}from "@playwright/test";
import { DataEntryForm } from "../Pages/DataEntryForm.spec";
import testdata from "../Test-Data/testdata.json";

import "../Utility/Hooks.spec";



test("Fill data",async({page})=>{
const dataEntryForm=new DataEntryForm(page);
await dataEntryForm.enterUserName(testdata.username);
await dataEntryForm.enterEmail(testdata.email);




})
test("Fill ",async({page})=>{
const dataEntryForm=new DataEntryForm(page);
await dataEntryForm.enterUserName(testdata.username);

})