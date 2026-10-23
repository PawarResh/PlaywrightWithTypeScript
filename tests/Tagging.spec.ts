import {test,expect} from "@playwright/test";


test(" @regression Test 2",async ({page})=>{
console.log("Test 2");
});

test(" @sanity fix me",async ({page})=>{
console.log("Test 2");
});

test('fail', { tag: ['@sanity'] }, async ({ page }) => {
  console.log('Test 2');
})

test('fail1', { tag: ['@sanity'] }, async ({ page }) => {
  console.log('Test 2');
})