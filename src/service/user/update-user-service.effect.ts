import { User } from '@src/domain/user/user.entity';
import { UserEditable } from '@src/domain/user/user.type';
import { userRepository } from '@src/infra/user/user-repository.effect';
import { UnhandledError } from '@src/lib/error/error';

export const notFoundError = new Error('not found');

export const updateUserService = async (
  id: string,
  editable: UserEditable,
): Promise<{
  user: User;
}> => {
  const stdDate = new Date();

  const found = await userRepository.findUser(id);
  if (!found) throw notFoundError;

  const updated = await userRepository.updateUser(id, editable, stdDate);
  if (!updated) throw new UnhandledError('update fail');

  return {
    user: updated,
  };
};
