import { Test, TestingModule } from '@nestjs/testing';
import { DefaultValueService } from './default-value.service';

describe('DefaultValueService', () => {
  let service: DefaultValueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefaultValueService],
    }).compile();

    service = module.get<DefaultValueService>(DefaultValueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
