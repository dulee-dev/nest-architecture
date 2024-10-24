import { userDomain } from '@src/domain/user/user-domain.pure';
import { User } from '@src/domain/user/user.entity';
import { UserPrototype } from '@src/domain/user/user.type';
import { userRepository } from '@src/infra/user/user-repository.effect';
import { v4 } from 'uuid';

export const usernameDuplicatedError = new Error('username duplicated');

export const createUserService = async (
  prototype: UserPrototype,
): Promise<{
  user: User;
}> => {
  const stdDate = new Date();

  const found = await userRepository.findUsers({
    username: prototype.username,
  });
  if (found.length > 0) throw usernameDuplicatedError;

  const instance = userDomain.createUser(prototype, v4, stdDate);

  const saved = await userRepository.saveUser(instance);

  return {
    user: saved,
  };
};
