import{test,expect,Browser} from "@playwright/test";


test("Test 1",async ({page})=>{
console.log("Test 1");
})
/*test.skip(browserName=="Chrome","Test 2",async ({page})=>{
console.log("Test 2");
})*/

test.skip("Test 2",async ({page})=>{
console.log("Test 2");
});

test.fail("fail",async ({page})=>{
console.log("Test 2");
});

test.fixme("fix me",async ({page})=>{
console.log("Test 2");
});

/*test.slow("abc",async({page})=>{
console.log("Test 2");
});*/