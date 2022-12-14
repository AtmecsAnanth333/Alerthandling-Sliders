import { test, chromium, expect,ElementHandle,Page } from "@playwright/test";

    test('Open', async()=>{
        const browser = await chromium.launch({
           headless : false
        })

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://automatenow.io/sandbox-automation-testing-practice-website/') 
        await page.click('//*[@id="post-399"]/div/div[3]/div/div[2]/div[1]/div/a')

        const ele=await page.$('//*[@id="alert"]/b')

        page.on("dialog",(dialog)=>{
           console.log('Message:'+dialog.message());
            console.log('Default value:'+dialog.defaultValue())
            console.log('Type:'+dialog.type());
           

        })
         await ele?.click()
         const ele2=await page.$$('button[@id="confirm"]')

        page.on("dialog",(dialog)=>{
           console.log('Message:'+dialog.message());
            console.log('Default value:'+dialog.defaultValue())
            console.log('Type:'+dialog.type());
           

        })
         await ele2?.click()
        
    
    
    })
 ////






        
        