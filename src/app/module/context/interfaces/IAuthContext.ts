export interface IAuthContext {
  login?: (token: string) => void;
  logout?: () => void;
  token: string | null;
  isAuth: boolean;
}
