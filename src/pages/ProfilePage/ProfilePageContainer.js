import React, { useEffect } from "react";
import styles from "./ProfilePageContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../../store/actions/userActions";

export const ProfileContainer = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.authentication.data.id);

  useEffect(() => {
    dispatch(userActions.requestUserInfo(userId));
  }, [userId]);

  return (
    <div className={styles.profilePageContainer}>
      <h2>Profile:</h2>
      <div className={styles.contentContainer}></div>
    </div>
  );
};
