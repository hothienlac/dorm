import { Test, TestingModule } from '@nestjs/testing';
import { InOutHistoryService } from './in-out-history.service';

describe('InOutHistoryService', () => {
  let service: InOutHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InOutHistoryService],
    }).compile();

    service = module.get<InOutHistoryService>(InOutHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
