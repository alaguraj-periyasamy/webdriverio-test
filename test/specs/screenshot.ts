import { remote } from 'webdriverio';

(async () => {
    const browser = await remote({
        capabilities: { browserName: 'chrome' }
    });

    await browser.url('https://www.google.com');
    await browser.saveScreenshot('./screenshot.png'); // Saves the screenshot

    console.log('Screenshot taken and saved as screenshot.png');
    await browser.deleteSession();
})();
