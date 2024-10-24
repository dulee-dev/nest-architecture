import { userRepository } from '@src/infra/user/user-repository.effect';
import { UnhandledError } from '@src/lib/error/error';

export const notFoundError = new Error('not found');

export const removeUserService = async (id: string): Promise<void> => {
  const stdDate = new Date();

  const found = await userRepository.findUser(id);
  if (!found) throw notFoundError;

  const removed = await userRepository.removeUser(id, stdDate);
  if (!removed) throw new UnhandledError('remove fail');

  return;
};
