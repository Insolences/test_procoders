import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import newsActions from "../../store/actions/newsActions";
import styles from "./NewsPageContainer.module.scss";
import { Loader } from "../../components/Loader/Loader";

export const NewsPageContainer = () => {
  const dispatch = useDispatch();

  const news = useSelector((state) => state.news);
  const { isLoaded, data } = news;

  useEffect(() => {
    dispatch(newsActions.getNews());
  }, []);

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <div className={styles.newsContainer}>
      <div className={styles.newsContent}>
        <h1> News: </h1>
        {data &&
          data.map((el) => (
            <div key={el.id} className={styles.news}>
              <h3>{el.title}</h3>
              <p>{el.text}</p>
            </div>
          ))}
      </div>
      <div className={styles.newsPaginationContainer}>
        Всего новостей: {data.length}
      </div>
    </div>
  );
};
