import { Action } from 'redux';

const initialState = {
  isAuthenticated: false,
};

const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
