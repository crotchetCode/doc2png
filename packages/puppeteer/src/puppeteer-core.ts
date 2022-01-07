import { launch, Browser, Frame, HTTPRequest, HTTPResponse, Page, Protocol } from 'puppeteer'
// import * as write from 'write'
import * as path from 'path'
// import * as chalk from 'chalk'
// import * as fse from 'fs-extra'
import { sleep } from '@doc2png/shared'
// const findChrome = require('carlo/lib/find_chrome')

const puppeteerArgs = [
  '--no-sandbox',
  'disable-web-security',
  '--disable-features=IsolateOrigins,site-per-process',
]

export default class Singleton {
  static getInstance<T extends unknown>(this: new () => T): T {
    if (!(<any>this)._instance) {
      ;(<any>this)._instance = new this()
    }
    return (<any>this)._instance
  }
}

export class CustomPuppeteer extends Singleton {
  #_page!: Page

  constructor() {
    super()
    this.initial()
  }

  private async initial() {
    // const localChrome = await findChrome({})
    // const executablePath = localChrome.executablePath
    const browser = await launch({
      // executablePath: executablePath,
      args: puppeteerArgs,
      defaultViewport: {
        width: 750,
        height: 900,
        isMobile: true,
      },
    })
    this.#_page = await browser.newPage()
  }

  public async screenshot(requestUrl: string): Promise<[pngPath: string, pngName: string]> {
    if (this.#_page) {
      const url = `https://docs.google.com/gview?embedded=true&url=${requestUrl}`
      try {
        await this.#_page.goto(url, {
          waitUntil: 'load',
        })
      } catch (error) {
        console.log(error)
      }
      const pngName = requestUrl.split('/').slice(-1)[0].split('.')[0]
      const pngPath = path.join(__dirname, '../images', `${pngName}.png`)
      await this.#_page.screenshot({ path: pngPath })
      console.log(`The picture is generated in ${pngPath}`)
      return [pngPath, pngName]
    } else {
      console.log('page 未初始化成功， 请稍后重试')
      await sleep(5000)
      return this.screenshot(requestUrl)
    }
  }
}
