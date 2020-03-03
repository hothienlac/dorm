import { Test, TestingModule } from '@nestjs/testing';
import { FingerPrintController } from './finger-print.controller';

describe('FingerPrint Controller', () => {
  let controller: FingerPrintController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FingerPrintController],
    }).compile();

    controller = module.get<FingerPrintController>(FingerPrintController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
