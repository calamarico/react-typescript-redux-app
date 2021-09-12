/* eslint-disable no-unused-vars */
export enum AuthActionTypes {
  SET_TOKEN = 'SET_TOKEN',
}

export interface IAuthAction {
  type: AuthActionTypes;
  payload?: any;
}

export class AuthAction {
  public static readonly SET_TOKEN: AuthActionTypes = AuthActionTypes.SET_TOKEN;

  public static setAuth(): IAuthAction {
    return {
      type: AuthAction.SET_TOKEN,
    };
  }
}
