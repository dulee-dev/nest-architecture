import { User } from './user.entity';
import { UserPrototype } from './user.type';

export const userDomain = {
  createUser(
    prototype: UserPrototype,
    idGen: () => string,
    stdDate: Date,
  ): User {
    const user: User = {
      id: idGen(),
      createdAt: stdDate,
      deletedAt: null,
      updatedAt: null,
      ...prototype,
    };

    return user;
  },
};
