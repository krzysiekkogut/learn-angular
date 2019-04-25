import * as AuthActions from './auth.actions';
export interface State {
  token: string;
  authenticated: boolean;
}

const initialState: State = {
  token: null,
  authenticated: false
};

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
): State {
  switch (action.type) {
    case AuthActions.SIGNUP:
    case AuthActions.SIGNIN:
      return { ...state, authenticated: true };
    case AuthActions.LOGOUT:
      return { ...state, authenticated: null, token: null };
    case AuthActions.SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
}
