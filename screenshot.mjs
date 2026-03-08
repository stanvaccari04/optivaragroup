import puppeteer from '/Users/stanvaccari/puppeteer-standalone/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js'
import fs from 'fs'
import path from 'path'

const url   = process.argv[2] || 'http://localhost:3001'
const label = process.argv[3] || ''

const screenshotsDir = path.resolve('/Users/stanvaccari/Desktop/OPTIVARA WEBSITE BUILDER/temporary screenshots')
fs.mkdirSync(screenshotsDir, { recursive: true })

// Auto-increment filename
let n = 1
while (fs.existsSync(path.join(screenshotsDir, `screenshot-${n}${label ? '-' + label : ''}.png`))) n++
const filename = `screenshot-${n}${label ? '-' + label : ''}.png`
const filepath  = path.join(screenshotsDir, filename)

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] })
const page    = await browser.newPage()
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 })
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
await new Promise(r => setTimeout(r, 2500)) // wait for GSAP / loader to initialise

// Scroll through page to trigger scroll animations and IntersectionObserver
const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight)
for (let y = 0; y <= pageHeight; y += 300) {
  await page.evaluate(s => window.scrollTo(0, s), y)
  await new Promise(r => setTimeout(r, 40))
}
await page.evaluate(() => window.scrollTo(0, 0))
await new Promise(r => setTimeout(r, 200))

await page.screenshot({ path: filepath, fullPage: true })
await browser.close()

console.log('Screenshot saved:', filepath)
