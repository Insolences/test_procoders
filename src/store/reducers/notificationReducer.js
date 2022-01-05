import { notificationTypes } from "../actions/types";
// import { Color } from "@material-ui/lab/Alert";

export const initialState = {
  open: false,
};

const notificationReducer = (state = initialState, action) => {
  const data = action.payload;

  switch (action.type) {
    case notificationTypes.SUCCESS:
      return {
        type: "success",
        data,
        open: true,
      };
    case notificationTypes.ERROR:
      return {
        type: "error",
        data,
        open: true,
      };
    case notificationTypes.WARNING:
      return {
        type: "warning",
        data,
        open: true,
      };
    case notificationTypes.INFO:
      return {
        type: "info",
        data,
        open: true,
      };
    case notificationTypes.CLEAR:
      return {
        open: false,
      };
    default:
      return state;
  }
};

export default notificationReducer;
