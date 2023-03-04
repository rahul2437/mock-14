import * as actions from "./actionTypes";

export const singup = (payload) => (dispatch) => {
  const URL = `http://localhost:8080/user/signup`;
  const body = JSON.stringify(payload);
  try {
    dispatch({ type: actions.SIGNUP_REQUEST });
    fetch(URL, {
      method: "POST",
      body,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: actions.SIGNUP_SUCCESS,
          payload: { message: data?.message },
        });
      })
      .catch((err) => {
        dispatch({
          type: actions.SIGNUP_FAILURE,
          payload: { message: data?.message },
        });
      });
  } catch (error) {
    dispatch({
      type: actions.SIGNUP_FAILURE,
      payload: { message: error?.message },
    });
  }
};
export const singin = (payload) => (dispatch) => {
  const URL = `http://localhost:8080/user/login`;
  const body = JSON.stringify(payload);
  try {
    dispatch({ type: actions.LOGIN_REQUEST });
    fetch(URL, {
      method: "POST",
      body,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          dispatch({
            type: actions.LOGIN_SUCCESS,
            payload: { token: data?.token, message: data?.message },
          });
          localStorage.setItem("bearertoken", `Bearer ${data.token}`);
        } else {
          dispatch({
            type: actions.LOGIN_FAILURE,
            payload: { message: data?.message },
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: actions.LOGIN_FAILURE,
          payload: { message: data?.message },
        });
      });
  } catch (error) {
    dispatch({
      type: actions.LOGIN_FAILURE,
      payload: { message: error?.message },
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: actions.LOGOUT });
};
