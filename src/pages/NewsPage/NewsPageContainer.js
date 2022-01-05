import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import newsActions from "../../store/actions/newsActions";

export const NewsPageContainer = () => {
  const dispatch = useDispatch()

  const news = useSelector(state => state.news)
  const { status, isLoaded, data} = news

  useEffect(()=>{
      dispatch(newsActions.requestNews());
  },[])

  if (!isLoaded) {
      return <p>Загрузка...</p>
  }

  return (
      <div>
          <h2> News: </h2>
          {data && data.map(el=>(
              <div key={el.id}>
                  <h3>{el.title}</h3>
                  <p>{el.text}</p>
              </div>
            ))
          }
      </div>
  )
};
