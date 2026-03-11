const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.error('PAGE ERROR:', error.message));

    await page.goto(`file://${process.cwd()}/index.html`, { waitUntil: 'networkidle0' });

    try {
        const btn = await page.$('[data-item-kind="lavender"]');
        if (btn) {
            console.log("Found lavender button. Clicking...");
            await btn.click();
            console.log("Clicked.");
        } else {
            console.log("Lavender button not found!");
        }
    } catch (e) {
        console.error("Click error", e);
    }

    await new Promise(r => setTimeout(r, 1000));
    await browser.close();
})();
