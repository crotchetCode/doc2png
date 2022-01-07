import { CustomPuppeteer } from './puppeteer-core'

// doc2png('https://edupaper.computingis.fun/化学/初三/(上)期中/2012/2012大兴区初三（上）期中化学.doc')

const cPuppeteer = CustomPuppeteer.getInstance()

export const run = async (url: string): Promise<[pngPath: string, pngName: string]> => {
  return cPuppeteer.screenshot(url)
}
