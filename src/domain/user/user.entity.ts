import { BaseEntity } from 'src/lib/domain/domain.type';

export interface User extends BaseEntity {
  username: string;
  pw: string;
}
