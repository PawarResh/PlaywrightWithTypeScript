import {test,expect} from "@playwright/test"


test.describe("group 1",async()=>{ // use ful to create group and run together 
test("Test 1",async ({page})=>{
console.log("Test 1");
})

test("Test 2",async ({page})=>{
console.log("Test 2");
})

})


test("Test 3",async ({page})=>{
console.log("Test 3");
})

test("Test 4",async ({page})=>{
console.log("Test 4");
})
test("Test 5",async ({page})=>{
console.log("Test 5");
})