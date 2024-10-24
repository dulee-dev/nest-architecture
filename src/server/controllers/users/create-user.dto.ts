import { User } from '@src/domain/user/user.entity';
import { HttpResponse } from '@src/lib/http/http.type';

export interface ReqBody {
  username: string;
  pw: string;
}

export type Respose = Promise<HttpResponse<{ user: User }, 201000>>;
