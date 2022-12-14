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
    
            // Verify Dialog Type is prompt  
            expect(dialog.type()).toContain('prompt');  
            
            // Verify Dialog Message  
            expect(dialog.message()).toContain('Hi there whats your name?');
            
            //Verify Default Input Value
            expect(dialog.defaultValue()).toContain('Super Automat');
            
            // Click on OK Button with any value
            await dialog.accept('Ananth');
        });
            
        // Click on Prompt Button
        await page.click('//*[@id="prompt"]/b');
            
        // Verify Message after clicking on Ok button
        await expect(page.locator('#msg')).toHaveText( 'You have entered name: balu')

    })