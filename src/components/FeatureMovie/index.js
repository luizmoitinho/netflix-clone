import React from "react";
import "./style.css";

export default function ({ item }) {
  const formatedDate = new Date(item.first_air_date);
  let genres = [];
  for(let i in item.genres){
    genres.push(item.genres[i].name);
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p//original${item.backdrop_path})`,
      }}
    >
      <div className="featured-vertical">
        <div className="featured-horizontal">
          <div className="featured-name"> {item.original_name} </div>
          <div className="featured-info">
            <div className="featured-points">{item.vote_average} ponto{item.vote_average > 1 ? 's':''}</div>
            <div className="featured-year">{formatedDate.getFullYear()}</div>
            <div className="featured-seasons">{item.number_of_seasons} temporada{item.number_of_seasons > 1 ? 's':''}</div>
          </div>
          <div className="featured-description">
            {item.overview}
          </div>
          <div className="featured-buttons">
            <a href={`/watch/${item.id}`} class="watch-button"> ► Assistir</a>
            <a href={`/list/add/${item.id}`} className="my-list-button">+ Minha Lista</a>
          </div>
          <div className="featured-genres">
            <strong> Gêneros: </strong>{genres.join(', ')}
          </div>
        </div>
      </div>
      
    </section>
  );
}
