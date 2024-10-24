import { USER_SEEDS } from '@fixtures/user-seeds';
import { findUserService, notFoundError } from './find-user-service.effect';
import { v4 } from 'uuid';

describe('findUserService', () => {
  test('if exist, get user', async () => {
    const id = USER_SEEDS[0].id;

    const data = await findUserService(id);

    expect(data.user).toMatchObject(USER_SEEDS[0]);
  });

  test('if not exist, throw notFoundError', async () => {
    const id = v4();

    await expect(findUserService(id)).rejects.toThrow(notFoundError);
  });
});
