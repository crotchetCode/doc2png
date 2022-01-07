import { CustomPuppeteer } from './puppeteer-core'

const cPuppeteer = CustomPuppeteer.getInstance()

export const run = async (url: string): Promise<[pngPath: string, pngName: string]> => {
  return cPuppeteer.screenshot(url)
}
