import { Test, TestingModule } from "@nestjs/testing";
import { ModifyRelationshipController } from "./modify-relationship.controller";

describe("ModifyRelationship Controller", () => {
  let controller: ModifyRelationshipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModifyRelationshipController],
    }).compile();

    controller = module.get<ModifyRelationshipController>(ModifyRelationshipController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
