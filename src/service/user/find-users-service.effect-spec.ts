import { faker } from '@faker-js/faker/.';
import { findUsersService } from './find-users-service.effect';
import { USER_SEEDS } from '@fixtures/user-seeds';

describe('findUsersService', () => {
  test('if 1 exist, get 1 user', async () => {
    const prototype = {
      username: USER_SEEDS[0].username,
    };

    const data = await findUsersService(prototype);

    expect(data.users).toHaveLength(1);
    expect(data.users[0]).toMatchObject(USER_SEEDS[0]);
  });

  test('if 0 exist, get 0 user', async () => {
    const prototype = {
      username: faker.internet.userName(),
    };

    const data = await findUsersService(prototype);

    expect(data.users).toHaveLength(0);
  });
});
