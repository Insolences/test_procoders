import { notificationTypes } from "../actions/types";

export const initialState = {
  open: false,
  type: "",
  message: {},
};

const notificationReducer = (state = initialState, action) => {
  const message = action.payload;

  switch (action.type) {
    case notificationTypes.SUCCESS:
      return {
        type: "success",
        message,
        open: true,
      };
    case notificationTypes.ERROR:
      return {
        type: "error",
        message,
        open: true,
      };
    case notificationTypes.WARNING:
      return {
        type: "warning",
        message,
        open: true,
      };
    case notificationTypes.INFO:
      return {
        type: "info",
        message,
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
