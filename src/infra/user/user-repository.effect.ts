import { User } from '@src/domain/user/user.entity';
import { UserEditable } from '@src/domain/user/user.type';
import { USER_SEEDS } from '@fixtures/user-seeds';

export const userRepository = {
  db: USER_SEEDS,

  async saveUser(user: User): Promise<User> {
    this.db.push(user);
    return user;
  },

  async findUsers(query: { username: string }): Promise<User[]> {
    return this.db.filter(
      (c) => c.username === query.username && c.deletedAt === null,
    );
  },

  async findUser(id: string): Promise<User | undefined> {
    return this.db.find((c) => c.id === id && c.deletedAt === null);
  },

  async removeUser(id: string, stdDate: Date): Promise<User | undefined> {
    let next: User | undefined = undefined;

    this.db = this.db.map((c) => {
      if (c.id === id) {
        next = { ...c, deletedAt: stdDate };
        return next;
      }
      return c;
    });

    return next;
  },

  async updateUser(
    id: string,
    editable: UserEditable,
    stdDate: Date,
  ): Promise<User | undefined> {
    let next: User | undefined = undefined;

    this.db = this.db.map((c) => {
      if (c.id === id) {
        next = { ...c, ...editable, updatedAt: stdDate };
        return next;
      }
      return c;
    });
    return next;
  },
};
