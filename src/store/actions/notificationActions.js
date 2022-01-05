import { notificationTypes } from "./types";

const notificationActions = {
  success,
  error,
  warning,
  info,
  clear,
};

function success(payload) {
  return { type: notificationTypes.SUCCESS, payload };
}

function error(payload) {
  return { type: notificationTypes.ERROR, payload };
}

function warning(payload) {
  return { type: notificationTypes.WARNING, payload };
}

function info(payload) {
  return { type: notificationTypes.INFO, payload };
}

function clear() {
  return { type: notificationTypes.CLEAR };
}

export default notificationActions;
