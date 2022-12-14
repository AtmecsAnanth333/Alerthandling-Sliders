import { test, chromium, expect,ElementHandle,Page } from "@playwright/test";

    test('Open', async()=>{
        const browser = await chromium.launch({
           headless : false
        })

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://automatenow.io/sandbox-automation-testing-practice-website/') 
        await page.click('//*[@id="post-399"]/div/div[3]/div/div[2]/div[1]/div/a')

        page.on('dialog', async dialog => {
            // Verify type of dialog
            expect(dialog.type()).toContain('alert');   
            
            // verify message of alert
            expect(dialog.message()).toContain('This is an Alert Box.');
            
            //click on alert ok button
            await dialog.accept();
          });
          
          // Click on Trigger an alert button
          await page.click('//*[@id="alert"]/b');
          
          // Verify Message displayed after clicking on ok button
          await expect(page.locator('#msg')).toHaveText( 'You clicked on Ok button.')
        });
        
    