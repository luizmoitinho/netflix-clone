import React, {useEffect, useState} from "react";
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';

import "./App.css";

export default function App(){

  const [movieList, setMovieList]  = useState([]);

  useEffect( () =>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list)
    }

    loadAll();
  }, [])

  return(
    <div className="page-home">
      <secton className="lists">
          {movieList.map( (item, key)=>(
            <MovieRow title={item.title} items={item.items} key={key}/> 
          ))}
      </secton>
    </div>
  );
};