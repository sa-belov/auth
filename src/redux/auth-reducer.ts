import { AnyAction } from 'redux';
import { AuthState } from '../types';
import { rejects } from 'assert';

const REGISTER = 'REGISTER';
const LOGIN = 'LOGIN';

const initialState: AuthState = {
  isAuthenticated: false,
  user: undefined,
};

const authReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case REGISTER: {
      return {
        ...state,
        isAuthenticated: true,
        user: { email: action.payload.email, password: action.payload.password },
      };
    }
    case LOGIN: {
      return;
    }
    default:
      return state;
  }
};

export const registerCreated = (data: { email: string; password: string }) => ({
  type: REGISTER,
  payload: data,
});

export default authReducer;
