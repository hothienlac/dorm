import { Test, TestingModule } from "@nestjs/testing";
import { RequestHistoryService } from "./request-history.service";

describe("RequestHistoryService", () => {
  let service: RequestHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestHistoryService],
    }).compile();

    service = module.get<RequestHistoryService>(RequestHistoryService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
