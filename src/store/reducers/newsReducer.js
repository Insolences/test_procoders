import { newsTypes } from "../actions/types";

const initState = {
  isLoaded: false,
  status: '',
  data: []
};

const newsReducer = (state = initState, action) => {

  const res  = action.payload;

  switch (action.type) {
    case newsTypes.GET_NEWS:
    return {
      isLoaded: true,
      status: res.status,
      data: res.data
    };
    default:
      return state;
  }
};

export default newsReducer;
