import * as puppeteer from 'puppeteer'

import getUrlFromArgV from './functions/getUrlFromArgV'

(async () => {
  try {
    const url: string = getUrlFromArgV()
    console.log(`url: ${url}`)
    // const browser = await puppeteer.launch()

    // Code

    // await browser.close()
  } catch (e) {
    console.error(e)
  } finally {
    process.exit()
  }
})()
