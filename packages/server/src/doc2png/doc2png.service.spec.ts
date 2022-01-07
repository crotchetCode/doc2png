import { Test, TestingModule } from '@nestjs/testing';
import { Doc2pngService } from './doc2png.service';

describe('Doc2pngService', () => {
  let service: Doc2pngService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Doc2pngService],
    }).compile();

    service = module.get<Doc2pngService>(Doc2pngService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
