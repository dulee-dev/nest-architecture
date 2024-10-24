import { faker } from '@faker-js/faker/.';
import { userDomain } from './user-domain.pure';
import { v4 } from 'uuid';

describe('userDomain', () => {
  test('createUser', () => {
    const prototype = {
      username: faker.internet.userName(),
      pw: faker.internet.password(),
    };
    const idGen = v4;
    const stdDate = new Date();

    const result = userDomain.createUser(prototype, idGen, stdDate);

    expect(result).toMatchObject({
      createdAt: stdDate,
      deletedAt: null,
      updatedAt: null,
      ...prototype,
    });
    expect(result.id).toBeUuid();
  });
});
