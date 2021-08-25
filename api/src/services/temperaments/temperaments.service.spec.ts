import { Test, TestingModule } from '@nestjs/testing';
import { TemperamentsService } from './temperaments.service';

describe('TemperamentsService', () => {
  let service: TemperamentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemperamentsService],
    }).compile();

    service = module.get<TemperamentsService>(TemperamentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
