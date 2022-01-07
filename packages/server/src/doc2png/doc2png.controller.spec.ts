import { Test, TestingModule } from '@nestjs/testing';
import { Doc2pngController } from './doc2png.controller';

describe('Doc2pngController', () => {
  let controller: Doc2pngController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Doc2pngController],
    }).compile();

    controller = module.get<Doc2pngController>(Doc2pngController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
