import { User } from '@src/domain/user/user.entity';
import { userRepository } from '@src/infra/user/user-repository.effect';

export const findUsersService = async (query: {
  username: string;
}): Promise<{
  users: User[];
}> => {
  const founds = await userRepository.findUsers(query);

  return {
    users: founds,
  };
};
