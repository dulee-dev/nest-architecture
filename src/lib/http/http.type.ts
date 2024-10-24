export interface HttpResponse<T = void, K = number, L = 'ok'> {
  data: T;
  code: K;
  message: L;
}
