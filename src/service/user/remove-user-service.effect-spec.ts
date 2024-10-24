import { v4 } from 'uuid';
import { faker } from '@faker-js/faker/.';
import { removeUserService, notFoundError } from './remove-user-service.effect';
import { createUserService } from './create-user-service.effect';
import { updateUserService } from './update-user-service.effect';
import { omit } from 'radashi';

describe('removeUserService', () => {
  test('if not exist, throw notFoundError', async () => {
    const id = v4();

    await expect(removeUserService(id)).rejects.toThrow(notFoundError);
  });

  test('create, update, and remove', async () => {
    const prototype = {
      username: faker.internet.userName(),
      pw: faker.internet.password(),
    };
    const editable = {
      pw: faker.internet.password(),
    };

    const createdData = await createUserService(prototype);
    const createdUser = createdData.user;

    expect(createdUser).toMatchObject({
      updatedAt: null,
      deletedAt: null,
      ...prototype,
    });
    expect(createdUser.id).toBeUuid();
    expect(createdUser.createdAt).toBeSimilarDate(new Date());

    const updatedData = await updateUserService(createdUser.id, editable);

    expect(updatedData.user).toMatchObject({
      ...omit(createdUser, ['updatedAt']),
      ...editable,
    });
    expect(updatedData.user.updatedAt).toBeSimilarDate(new Date());

    await removeUserService(createdUser.id);
  });
});
