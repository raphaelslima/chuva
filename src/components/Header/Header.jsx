import React from "react";



//CSS
import './style.css'

//Image
import globo from '../../assets/icons/globo.jpg'
import dropDown from '../../assets/icons/dropdown.jpg'
import user from '../../assets/img/user.jpg'


export default function Header(props){
  return(

      <header className="header">
     
        <div className="text-Area">
          <p>Anais do Simpósio Latino Americano de Ciências de Alimentos </p>
          <h4>Anais do 13º Simpósio Latino Americano de Ciência de Alimentos </h4>
          <p>ISSN: 1234-5678</p>
        </div>

        <div className="user-Area">

          <a>
            <img src={globo}/>
            <span>PT,BR </span> 
            <img src={dropDown}/>
          </a>
            
          <div className="user">
            <div className="text">
              <span>Bem vindo!</span>
              <p>alguem12@galoascience.com</p>
            </div>
            <div className="img-user">
              <div className="number">2</div>
              <img src={user} alt="Foto de perfil" />
            </div>
          </div>
        </div>
      </header>

  )
}