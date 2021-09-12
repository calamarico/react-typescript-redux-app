import { AuthAction, IAuthAction } from '../actions/auth';

const initialState: any = {};

export interface AuthCredentialsState {
  isAuth: boolean,
  token?: string
}

export function reduceAuthState(
  state: AuthCredentialsState = initialState,
  action: IAuthAction,
) {
  switch (action.type) {
    case AuthAction.SET_TOKEN:
      return action.payload;
    default:
      return state;
  }
}
