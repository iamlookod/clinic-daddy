import { Test, TestingModule } from '@nestjs/testing';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
import { ReadMembersDTO } from './dto/read-members.dto';

/**
 * Controller specs for controller unit test
 */
describe('MembersController', () => {
  let membersController: MembersController;

  beforeEach(async () => {
    const Members: TestingModule = await Test.createTestingModule({
      controllers: [MembersController],
      providers: [MembersService],
    }).compile();

    membersController = Members.get<MembersController>(MembersController);
  });

  describe('root', () => {
    it('should return object is instance of "ReadMembersDTO!"', () => {
      const readMembersDTO = membersController.getMembers();
      expect(readMembersDTO).toBeInstanceOf(ReadMembersDTO);
    });
  });
});
