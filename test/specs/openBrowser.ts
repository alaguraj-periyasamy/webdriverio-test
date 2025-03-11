import { remote } from 'webdriverio';

(async () => {
    const browser = await remote({
        capabilities: { browserName: 'chrome' }
    });

    await browser.url('https://www.google.com');
    console.log(await browser.getTitle()); // Print the title in CMD

    await browser.deleteSession();
})();
