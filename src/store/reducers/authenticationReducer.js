import { authenticationTypes } from "../actions/types";

const initState = {
  status: "",
  message: "",
  isLoading: false,
  isAuth: false,
  data: {},
};

const authenticationReducer = (state = initState, action) => {
  const res = action.payload;

  switch (action.type) {
    case authenticationTypes.SING_IN:
      return {
        ...state,
        isLoading: true,
      };
    case authenticationTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        status: res.status,
        data: res.data,
      };
    case authenticationTypes.SIGN_IN_FAIL:
      return {
        ...state,
        isAuth: false,
        isLoading: false,
      };
    case authenticationTypes.SIGN_OUT:
      return initState;
    default:
      return state;
  }
};

export default authenticationReducer;
