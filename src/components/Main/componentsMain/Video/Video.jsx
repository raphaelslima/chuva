import React from "react";

//CSS
import './style.css'

export default function Video(props){
  return(

      <div className="video">
        <object width="783" height="439">
          <param name="movie" value="http://www.youtube.com/v/C5quXkMfvJo" />
          <embed src="http://www.youtube.com/v/C5quXkMfvJo" type="application/x-shockwave-flash" width="783" height="439" />
        </object>
      
      </div>
 
  )
}

