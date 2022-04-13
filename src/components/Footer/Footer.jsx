import React from "react";

//CSS
import './style.css'

//image
import imgFooter from '../../assets/img/footer.png'

export default function Footer(props){
  return(
      <footer className="footer">
         <img src={imgFooter}/>

      </footer>
  
  )
}