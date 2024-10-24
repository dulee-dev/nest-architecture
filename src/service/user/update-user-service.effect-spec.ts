import { v4 } from 'uuid';
import { updateUserService, notFoundError } from './update-user-service.effect';
import { faker } from '@faker-js/faker/.';

describe('updateUserService', () => {
  test('if not exist, throw notFoundError', async () => {
    const id = v4();
    const editable = {
      pw: faker.internet.password(),
    };

    await expect(updateUserService(id, editable)).rejects.toThrow(
      notFoundError,
    );
  });

  test.skip('tested in remove user', async () => {});
});
