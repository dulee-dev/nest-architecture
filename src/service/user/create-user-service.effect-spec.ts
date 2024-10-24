import { faker } from '@faker-js/faker/.';
import {
  createUserService,
  usernameDuplicatedError,
} from './create-user-service.effect';
import { USER_SEEDS } from '@fixtures/user-seeds';

describe('createUserService', () => {
  test('if username is duplicated, throw usernameDuplicatedError', async () => {
    const prototype = {
      username: USER_SEEDS[0].username,
      pw: faker.internet.password(),
    };

    await expect(createUserService(prototype)).rejects.toThrow(
      usernameDuplicatedError,
    );
  });

  test.skip('if ok tested in removeUser', () => {});
});
