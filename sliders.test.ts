import { test } from "@playwright/test";

test("Slider Demo", async ({ page }) => {
    await test.step("Goto demo site", async () => {
        await page.goto("https://automatenow.io/sandbox-automation-testing-practice-website/");

    
    await test.step("handle slider", async () => {
        await page.waitForSelector('//*[@id="post-399"]/div/div[3]/div/div[1]/div[3]/div/a');
        const s = await page.$('//*[@id="post-399"]/div/div[3]/div/div[1]/div[3]/div/a')
        let ele = page.locator('//*[@id="post-2871"]/div/div[3]/p[2]')
        let text = await ele.inputValue();
        console.log('Initial text: ' + text);
        let targetAmount = "33";
        //we need varible
        let isCompleted = false;
        if (s) {
            while (!isCompleted) {
                let srcBound = await s.boundingBox();
                if (srcBound) {
                    await page.mouse.move(srcBound.x + srcBound.width / 2,
                        srcBound.y + srcBound.height / 2)
                    await page.mouse.down();
                    await page.mouse.move(srcBound.x + 15, srcBound.y + srcBound.height / 2);
                    await page.mouse.up();
                    let text = await ele.inputValue();
                    if (text == targetAmount) {
                        isCompleted = true;
                    }
                }
            }

        }



        await page.waitForTimeout(5000)
    });
})
})