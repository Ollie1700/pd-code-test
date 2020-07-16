const isRedirectStatus = status => status >= 300 && status < 400

export default async function followLink(url: string, browser: any) {
  const page = await browser.newPage()
  await page.on('response', response => {
    const status = response.status()

    if (isRedirectStatus(status)) {
      console.log(`-> ${response.url()}`)
    }
  })
  await page.goto(url, { waitUntil: 'networkidle2' })
}
