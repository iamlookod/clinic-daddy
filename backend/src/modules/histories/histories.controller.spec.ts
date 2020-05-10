import { Test, TestingModule } from '@nestjs/testing';
import { HistoriesController } from './histories.controller';
import { HistoriesService } from './histories.service';
import { ReadHistoriesDTO } from './dto/read-histories.dto';

/**
 * Controller specs for controller unit test
 */
describe('HistoriesController', () => {
  let historiesController: HistoriesController;

  beforeEach(async () => {
    const Histories: TestingModule = await Test.createTestingModule({
      controllers: [HistoriesController],
      providers: [HistoriesService],
    }).compile();

    historiesController = Histories.get<HistoriesController>(
      HistoriesController,
    );
  });
});
