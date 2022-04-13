import React from "react";

//CSS
import './style.css'

//Image
import logo from '../../assets/img/Logo.png'

export default function SideBar(props){
  return(
    <div className="SideBar">
      <div className="title">
        <span>SLACA 2019</span>
      </div>
      <div className="img">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="menu">
        <ul>
          <li> <a href="">Apresentação</a> </li>
          <li> <a href="">Comitês</a> </li>
          <li> <a href="">Autores</a> </li>
          <li> <a href="">Eixos Temáticos</a> </li>
          <li> <a href="">Trabalhos</a> </li>
          <li> <a href="">Contatos</a> </li>
        </ul>
      </nav>
    

          
      
    </div>
  )
}