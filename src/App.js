import React, {useEffect, useState} from "react";
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from "./components/FeatureMovie/"

import "./App.css";

export default function App(){

  const [movieList, setMovieList]  = useState([]);
  const [featureData, setFeatureData]= useState(null);



  useEffect( () =>{
    const loadAll = async () => {
      // movie list
      let list = await Tmdb.getHomeList();
      setMovieList(list)

      //movie main
      let originals  = list.filter( elem => elem.slug === 'originals');
      let random = Math.floor( Math.random() * (originals[0].items.results.length) - 1 );
      let chosen = originals[0].items.results[random];

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id,'tv');
      setFeatureData(chosenInfo)
    }

    loadAll();
  }, [])

  return(
    <div className="page-home">
      {featureData && 
        <FeatureMovie  item={featureData}/> 
      }

      <section className="lists">
          {movieList.map( (item, key)=>(
            <MovieRow title={item.title} items={item.items} key={key}/> 
          ))}
      </section>
    </div>
  );
};