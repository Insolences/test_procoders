import { userTypes } from "../actions/types";

const initState = {
  isLoading: true,
  status: "",
  data: {},
};

const userReducer = (state = initState, action) => {
  const res = action.payload;

  switch (action.type) {
    case userTypes.GET_USER:
      return {
        ...state,
        isLoading: false,
        status: res.status,
        data: res.data,
      };

    default:
      return state;
  }
};

export default userReducer;
