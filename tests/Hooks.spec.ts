
import {test} from "@playwright/test";

test.beforeEach("before each",async ({page})=>{
console.log("before each");
})

test.beforeAll("before all",async ({browser})=>{
console.log("before all");
})
test.afterEach("after each",async ({page})=>{
console.log("after each");
})

test.afterAll(" after all ",async ({browser})=>{
console.log("after all");
})

test("Test 1",async ({page})=>{
console.log("Test 1");
})
test("Test 2",async ({page})=>{
console.log("Test 2");
})