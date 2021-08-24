import { Test, TestingModule } from '@nestjs/testing';
import { TemperamentsController } from './temperaments.controller';

describe('TemperamentsController', () => {
  let controller: TemperamentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TemperamentsController],
    }).compile();

    controller = module.get<TemperamentsController>(TemperamentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
