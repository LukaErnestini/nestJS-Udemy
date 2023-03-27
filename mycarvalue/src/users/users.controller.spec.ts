import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let fakeUsersService: Partial<UsersService>;
  let fakeAuthService: Partial<AuthService>;

  beforeEach(async () => {
    fakeUsersService = {
      find: (email: string) =>
        Promise.resolve([{ id: 1, email, password: 'abc' }] as User[]),
      findOne: (id: number) =>
        Promise.resolve({
          id,
          email: 'asdf@asdf.com',
          password: 'abc',
        } as User),
      // remove: () => {}
      // ,update: () => {}
    };

    fakeAuthService = {
      signin: (email: string, password: string) =>
        Promise.resolve({ id: 1, email, password } as User),
      // signup:(email:string, password:string) => {}
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: fakeUsersService,
        },
        {
          provide: AuthService,
          useValue: fakeAuthService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findAllUsers returns a list of users with the given email', async () => {
    const users = await controller.findAll('someEmail');
    expect(users.length).toEqual(1);
    expect(users[0].email).toEqual('someEmail');
  });

  it('throws and error if user with given id is not found', async () => {
    fakeUsersService.findOne = (id: number) => null;
    await expect(controller.find('1')).rejects.toThrow(NotFoundException);
  });

  it('findUser returns a single user with the given id', async () => {
    const user = await controller.find('1');
    expect(user.id).toEqual(1);
  });

  it('signin returns user and assigns it session.userId', async () => {
    let session = { userId: null };
    const user = await controller.signin(
      { email: 'abc', password: 'asd' } as CreateUserDto,
      session,
    );
    expect(session.userId).toEqual(1);
    expect(user.email).toEqual('abc');
  });
});
