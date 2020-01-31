import { Test, TestingModule } from "@nestjs/testing";
import { FingerPrintService } from "./finger-print.service";

describe("FingerPrintService", () => {
  let service: FingerPrintService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FingerPrintService],
    }).compile();

    service = module.get<FingerPrintService>(FingerPrintService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
