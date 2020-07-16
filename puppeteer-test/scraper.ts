import * as puppeteer from 'puppeteer'

import getUrlFromArgV from './functions/getUrlFromArgV'
import followLink from './functions/followLink'
import getLinksFromUrl from './functions/getLinksFromUrl'

(async () => {
  try {
    const url = getUrlFromArgV()
    const browser = await puppeteer.launch()
    const links = await getLinksFromUrl(url, browser)

    console.log(url)

    const processedLinks = links.map(link => followLink(link, browser))

    await Promise.all(processedLinks)
    await browser.close()
  } catch (e) {
    console.error(e)
  } finally {
    process.exit()
  }
})()
