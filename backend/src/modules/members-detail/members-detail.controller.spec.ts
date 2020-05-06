import { Test, TestingModule } from '@nestjs/testing';
import { MembersDetailController } from './members-detail.controller';
import { MembersDetailService } from './members-detail.service';
// import { ReadMembersDetailDTO } from './dto/read-members=detail.dto';

/**
 * Controller specs for controller unit test
 */
describe('MembersDetailController', () => {
  let membersDetailController: MembersDetailController;

  beforeEach(async () => {
    const Members: TestingModule = await Test.createTestingModule({
      controllers: [MembersDetailController],
      providers: [MembersDetailService],
    }).compile();

    membersDetailController = Members.get<MembersDetailController>(
      MembersDetailController,
    );
  });
});
