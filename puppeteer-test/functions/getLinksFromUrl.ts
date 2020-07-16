import isUrlValid from './isUrlValid'

export default async function getLinksFromUrl(url: string, browser: any) {
  const page = await browser.newPage()
  
  await page.goto(url, { waitUntil: 'networkidle2' })

  const links = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('a[href]'))

    return anchors.map((anchor: any) => anchor.href)
  })

  return links.filter(isUrlValid)
}
