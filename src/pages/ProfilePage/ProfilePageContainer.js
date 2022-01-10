import React, { useEffect } from "react";
import styles from "./ProfilePageContainer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../../store/actions/userActions";
import { Loader } from "../../components/Loader/Loader";

export const ProfileContainer = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.authentication.data.id);
  const { isLoading, data } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userActions.getUser(userId));
  }, [userId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.profilePageContainer}>
      <h1>Profile</h1>
      <div className={styles.contentContainer}>
        <div className={styles.infoContainer}>
          <p>User ID: {data.userId}</p>
          <p>Town: {data.city}</p>
          <div>
            <p>Languages:</p>
            <ul className={styles.languagesList}>
              {data.languages.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.socialIconsContainer}>
          <h2>Social links:</h2>
          <ul className={styles.socialLinksList}>
            {data.social.map((el, index) => {
              return (
                <li className={styles.socialLink} key={index}>
                  <a
                    rel="noopener"
                    className={`${styles.icons} ${styles[el.label]}`}
                    href={el.link}
                    target="_blank"
                  />
                  <a
                    rel="noopener"
                    className={styles.iconsLabel}
                    href={el.link}
                    target="_blank"
                  >
                    {el.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
