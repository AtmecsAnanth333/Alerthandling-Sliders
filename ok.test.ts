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
            expect(dialog.type()).toContain('confirm');
                
            // Verify Dialog Message
            expect(dialog.message()).toContain('OK or Cancel, which will it be?');
                
            //Click on OK Button
            await dialog.accept();
        });
            
        // Click on Trigger a Confirmation button
        await page.click('//*[@id="confirm"]/b');
    
        // Verify message displayed after clicking on OK button
        await expect(page.locator('#msg')).toHaveText( 'OK')
    });
    