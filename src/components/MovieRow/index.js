import React, {useState} from "react";
import "./styles.css";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = ( ) => {
    let x = scrollX + Math.floor( window.innerWidth/2 );
    if(x > 0)
      x = 0;
    setScrollX(x)
  }

  const handleRightArrow = ( ) => {
    let x = scrollX - Math.floor( window.innerWidth/2);
    let listW = items.results.length * 150;

    if( (window.innerWidth - listW) > x){
      x = window.innerWidth - listW - 60;
    } 
    setScrollX(x);
  }

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="movie-row-left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize:50}}/>
      </div>

      <div className="movie-row-right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize:50}}/>
      </div>

      <div className="movie-row-list-area">
        <div className="movie-row-list" style={{
          marginLeft:scrollX,
          width: items.results.length * 150
        }}>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movie-row-list-item">
                <img
                  key={key}
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>

      

    </div>
  );
};
