import { Test, TestingModule } from '@nestjs/testing';
import { ModifyDefaultValueController } from './modify-default-value.controller';

describe('ModifyDefaultValue Controller', () => {
  let controller: ModifyDefaultValueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModifyDefaultValueController],
    }).compile();

    controller = module.get<ModifyDefaultValueController>(ModifyDefaultValueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
