import { User } from '@src/domain/user/user.entity';
import { userRepository } from '@src/infra/user/user-repository.effect';

export const notFoundError = new Error('not found');

export const findUserService = async (
  id: string,
): Promise<{
  user: User;
}> => {
  const found = await userRepository.findUser(id);
  if (!found) throw notFoundError;

  return {
    user: found,
  };
};
