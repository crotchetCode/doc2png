import { Module } from '@nestjs/common';
import { Doc2pngController } from './doc2png.controller';
import { Doc2pngService } from './doc2png.service';

@Module({
  controllers: [Doc2pngController],
  providers: [Doc2pngService],
})
export class Doc2pngModule {}
