const puppeteer = require("puppeteer");
const url = "https://www.linkedin.com/login";
const parse = require("./parse");

async function scrape(req, res) {
  const link = req.body.link;
  const username = req.body.username;
  const password = req.body.password;

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-gpu"],
    });
    const page = await browser.newPage();
    await page.setUserAgent("Chrome/88.0.4298.0");

    await navigation(page, link, username, password);

    let data = await parse(page);

    res.status(200).send({ data: data });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Error" });
  }
}

async function navigation(page, link, username, password) {
  await page.goto(url);
  await page.waitForTimeout(1000);
  await page.click("#username");
  await page.waitForTimeout(500);
  await page.keyboard.type(username);
  await page.waitForTimeout(1000);
  await page.click("#password");
  await page.waitForTimeout(500);
  await page.keyboard.type(password);
  await page.waitForTimeout(1000);
  await page.click(".from__button--floating");
  await page.waitForNavigation();
  await page.waitForTimeout(1000);
  await page.goto(link);

  await page.evaluate(
    () =>
      new Promise((resolve) => {
        var scrollTop = -1;
        const interval = setInterval(() => {
          window.scrollBy(0, 100);
          if (document.documentElement.scrollTop !== scrollTop) {
            scrollTop = document.documentElement.scrollTop;
            return;
          }
          clearInterval(interval);
          resolve();
        }, 100);
      })
  );
}

module.exports = scrape;
