//types of fixture
//1.test fixture-requested by test and gets rerun per test

import {test} from '../../Fixtures/customfixture'

test("test1", async({testfixture})=>{
    console.log(`use statement execution : ${testfixture}`) 
})

test("test2", async({testfixture})=>{
    console.log(`use statement execution : ${testfixture}`)
})

//2.Worker fixture - runs only once per worker

test("testworker",async({testfixture,workerfixture})=>{
    console.log(`use statement execution : ${testfixture}`)
    console.log(`use statement execution : ${workerfixture}`)
})

test("test2worker",async({testfixture})=>{
    console.log(`use statement execution : ${testfixture}`)
})



/*
before executing worker fixture

before executing use statement - test fixture
use statement execution : Playwright April batch
afetr executing use test fixture

before executing use statement - test fixture
use statement execution : Playwright April batch
afetr executing use test fixture

after executing worker fixture
/*





*/






/*
test ('test1', async({page})=>{
    await page.goto('https://www.saucedemo.com/v1/')
    await page.fill()
    await page.click()

})


test ('test1', async({loggedInPage})=>{}

})


*/


