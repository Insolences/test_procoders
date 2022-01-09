import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Notification.module.scss";
import { Alert } from "reactstrap";
import notificationActions from "../../store/actions/notificationActions";

export const Notification = () => {
  const dispatch = useDispatch();
  const { message, type, open } = useSelector((state) => state.notification);

  const closeNotification = () => {
    dispatch(notificationActions.clear());
  };

  if (!open) {
    return null;
  }

  return (
    <div className={styles.notificationContainer}>
      <Alert className={styles[type]} isOpen={open} toggle={closeNotification}>
        {message}
      </Alert>
    </div>
  );
};
