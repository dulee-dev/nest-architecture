import { User } from './user.entity';

export interface UserPrototype extends Pick<User, 'username' | 'pw'> {}

export interface UserEditable extends Partial<Pick<User, 'pw'>> {}
