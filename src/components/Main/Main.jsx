import React from "react";

//CSS
import './style.css'

//Componentes

import AsideRight from "../Aside-Right/AsideRight";
import Resume from "../Resume/Resume";
import Discussion from "../Discussion/Discussion";
import Video from "../Video/Video";

export default function Main(props){
  return(

      <main className="main">
        <div className="header-main">
          <div className="left-main">

          <h6 className="title">Análise sensorial de preparações funcionaisdesenvolvidas para escolares entre 09 e 15 anos, do município deCampinas/SP </h6>
          <Video/>
         
          </div>

          <AsideRight/>
        </div>
        <Resume/>
        <Discussion/>
        <div className="discussion"></div>
      </main>
 
  )
}