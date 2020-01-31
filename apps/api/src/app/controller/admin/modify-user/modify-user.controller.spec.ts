import { Test, TestingModule } from "@nestjs/testing";
import { ModifyUserController } from "./modify-user.controller";

describe("ModifyUser Controller", () => {
  let controller: ModifyUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModifyUserController],
    }).compile();

    controller = module.get<ModifyUserController>(ModifyUserController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
