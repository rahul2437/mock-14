import * as actions from "./actionTypes";
export const getBugs = (payload) => (dispatch) => {
  const URL = "http://localhost:8080/bugs";
  try {
    dispatch({ type: actions.GET_BUGS_REQUEST });
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: localStorage.getItem("bearertoken"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: actions.GET_BUGS_SUCCESS, payload: data });
      })
      .catch((err) => {
        dispatch({ type: actions.GET_BUGS_FAILURE });
      });
  } catch (error) {
    dispatch({ type: actions.GET_BUGS_FAILURE });
  }
};
