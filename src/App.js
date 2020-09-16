import React, {useEffect, useState} from "react";
import Tmdb from './Tmdb';

export default function App(){

  

  useEffect( () =>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      console.log(list)
    }

    loadAll();
  }, [])

  return(
    <div>
      Ola mundo
    </div>
  );
};