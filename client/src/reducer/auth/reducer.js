import * as actions from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  message: "",
  isAuth: false,
  token: "",
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.SIGNUP_REQUEST: {
      return { ...state, isLoading: true };
    }
    case actions.SIGNUP_SUCCESS: {
      return { ...state, isLoading: false, message: payload.message };
    }
    case actions.SIGNUP_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: payload.message,
      };
    }
    case actions.LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case actions.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        token: payload.token,
        message: payload.message,
      };
    }
    case actions.LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: payload.message,
      };
    }
    case actions.LOGOUT: {
      return initState;
    }
    default:
      return state;
  }
};
export { reducer };
