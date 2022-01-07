import { Controller, Get, Param, Query } from '@nestjs/common';
import { Doc2pngService } from './doc2png.service';

@Controller('doc2png')
export class Doc2pngController {
  constructor(private readonly doc2pngService: Doc2pngService) {}

  @Get()
  async doc2png(@Query() query: { paperUrl: string }) {
    return this.doc2pngService.transform(query.paperUrl);
  }
}
