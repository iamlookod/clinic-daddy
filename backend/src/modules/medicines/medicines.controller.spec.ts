import { Test, TestingModule } from '@nestjs/testing';
import { MedicinesController } from './medicines.controller';
import { MedicinesService } from './medicines.service';
import { ReadMedicinesDTO } from './dto/read-medicines.dto';

/**
 * Controller specs for controller unit test
 */
describe('MedicinesController', () => {
  let medicinesController: MedicinesController;

  beforeEach(async () => {
    const Medicines: TestingModule = await Test.createTestingModule({
      controllers: [MedicinesController],
      providers: [MedicinesService],
    }).compile();

    medicinesController = Medicines.get<MedicinesController>(
      MedicinesController,
    );
  });

  describe('root', () => {
    it('should return object is instance of "ReadMedicinesDTO!"', () => {
      const readMedicinesDTO = medicinesController.getMedicines();
      expect(readMedicinesDTO).toBeInstanceOf(ReadMedicinesDTO);
    });
  });
});
