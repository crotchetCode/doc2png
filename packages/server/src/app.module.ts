import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Doc2pngModule } from './doc2png/doc2png.module';

@Module({
  imports: [Doc2pngModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
