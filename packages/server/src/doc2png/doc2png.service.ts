import { Injectable } from '@nestjs/common';
import { run } from '@doc2png/puppeteer';
import { readFileSync } from 'fs-extra';
import * as urlencode from 'urlencode';
// const isAbsoluteHttpURI = require('@stdlib/assert-is-absolute-http-uri')

@Injectable()
export class Doc2pngService {
  async transform(url: string) {
    // console.log(urlencode(url), isAbsoluteHttpURI(urlencode(url)))
    try {
      // if (isAbsoluteHttpURI(urlencode(url))) {
      const [pngPath, pngName] = await run(url);
      const imageBuffer = readFileSync(pngPath);
      return {
        code: 0,
        mgs: '图片转换成功',
        data: {
          image: imageBuffer,
          imageName: pngName,
        },
      };
      // } else {
      // return {
      // code: 10002,
      // msg: 'url参数不合法',
      // data: null
      // }
      // }
    } catch (error) {
      console.log(error);
      return {
        code: 10001,
        msg: '图片转换出现错误',
        data: null,
      };
    }
  }
}
