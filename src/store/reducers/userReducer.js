import { userTypes } from "../actions/types";

const initState = {
  isLoaded: false,
  status: "",
  data: {},
};

const userReducer = (state = initState, action) => {
  const res = action.payload;
  console.log("RES: ", res);
  switch (action.type) {
    case userTypes.GET_USER:
      return {
        ...state,
        isLoaded: true,
        status: res.status,
        data: res.data,
      };

    default:
      return state;
  }
};

export default userReducer;
