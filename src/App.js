import React, {useEffect, useState} from "react";
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeatureMovie from "./components/FeatureMovie/"
import Header from './components/Header';

import "./App.css";

export default function App(){

  const [movieList, setMovieList]     = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

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
  }, []);

  useEffect( () => {

    const scrollListner = () =>{
      if(window.scrollY > 50)
        setBlackHeader(true);
      else
        setBlackHeader(false);

    }

    window.addEventListener('scroll',scrollListner);

    return () => {
      window.removeEventListener('scroll',scrollListner);
    }

  },[]);

  return(
    
    <div className="page-home">
      
      <Header black={blackHeader} />

      {featureData && 
        <FeatureMovie  item={featureData}/> 
      }

      <section className="lists">
          {movieList.map( (item, key)=>(
            <MovieRow title={item.title} items={item.items} key={key}/> 
          ))}
      </section>

      <footer>
            <div>
                Produzido por <span role="img" aria-label="coração">Luiz Moitinho</span>
              </div>
              <div>
                Direitos de imagem para Netflix.
              </div>
              <div>
                Dados originzados do site <a href="https://www.themoviedb.org/">Themoviedb.org</a>
              </div>
      </footer>
    </div>
  );
};