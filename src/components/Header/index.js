import React from "react";
import './style.css';

export default function({black}){
  const logo_netflix = require("../../assets/img/netflix_logo2.png");
  const user_profile = require("../../assets/img/user_profile.png");
  return(
    <header className= {black ? 'black':''} >
      <div className="header-logo">
          <a href="/">
            <img src= {logo_netflix} 
                 alt="Netflix"/>
          </a>
      </div>
      <div className="header-user">
        <a href="/">
          <img src={user_profile} 
               alt="Perfil do usuário"/>
        </a>
      </div>
    </header>
  )
}