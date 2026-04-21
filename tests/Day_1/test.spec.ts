import {chromium, test} from '@playwright/test';

test('demo test', async () => {
   const browser = await chromium.launch();
   const context1 = await browser.newContext(

   );
   const context2 = await browser.newContext();
   
   const page1 =await context1.newPage();
   const page2 =await context2.newPage();

})




