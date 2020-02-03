import { Test, TestingModule } from '@nestjs/testing';
import { MembersDetailController } from './members-detail.controller';
import { MembersDetailService } from './members-detail.service';
import { ReadMembersDetailDTO } from './dto/read-members=detail.dto';

/**
 * Controller specs for controller unit test
 */
describe('MembersDetailController', () => {
  let membersController: MembersDetailController;

  beforeEach(async () => {
    const Members: TestingModule = await Test.createTestingModule({
      controllers: [MembersDetailController],
      providers: [MembersDetailService],
    }).compile();

    membersController = Members.get<MembersDetailController>(
      MembersDetailController,
    );
  });

  describe('root', () => {
    it('should return object is instance of "ReadMembersDTO!"', () => {
      const readMembersDTO = membersController.findAll();
      expect(readMembersDTO).toBeInstanceOf(ReadMembersDetailDTO);
    });
  });
});
