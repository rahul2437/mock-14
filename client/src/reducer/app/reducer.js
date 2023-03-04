import * as actions from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  allBugs: [],
  count: 0,
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_BUGS_REQUEST:
      return { ...state, isLoading: true };
    case actions.GET_BUGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allBugs: payload.bugs,
        count: payload.total,
      };
    case actions.GET_BUGS_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
