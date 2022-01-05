import { notificationTypes } from "./types";

const success = (payload) => {
  return { type: notificationTypes.SUCCESS, payload };
}

const error = (payload) => {
  return { type: notificationTypes.ERROR, payload };
}

const warning = (payload) => {
  return { type: notificationTypes.WARNING, payload };
}

const info =(payload) => {
  return { type: notificationTypes.INFO, payload };
}

const clear = () => {
  return { type: notificationTypes.CLEAR };
}

const notificationActions = {
  success,
  error,
  warning,
  info,
  clear,
};

export default notificationActions;
