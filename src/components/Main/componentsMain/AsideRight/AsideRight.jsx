import React from "react";

//CSS
import './style.css'

//Icons
import download from '../../../../assets/icons/download.png'
import star from '../../../../assets/icons/star.png'
import doi from '../../../../assets/icons/doi.png'

export default function AsideRight(props){
  return(

      <aside className="asideRight">
        <div className="buttons">
          <a>
            <img src={download} alt="Download" />
          </a>
          <a>
            <img src={star} alt="Favorite" />
          </a>
          <a>
            <img src={doi} alt="doi" />
              </a>
          </div>
        <span>COMO CITAR ESSE TRABALHO?</span>
          <div className="details">
            <div className="title">
              <h4>Detalhes</h4>
            </div>
            <p>
              Tipo de Apresentação: <strong>Pôster</strong> 
              <br/>
              Eixo temático: <strong>Alimentação e saúde (AS)</strong>  
              <br/>
              Palavras-chaves: <strong>Alimentos funcionais, alimentação escolar.</strong> 
              <br/>
              <br/>
              <strong>Autores:</strong>
              <br/>
              Galileo Galilei¹
              <br/>
              Berta Lange de Morretes²
              <br/>
              Isaac Newton³
              <br/>
              Cesar Lattes¹
              <br/>
              Stephen Hawking⁴
              <br/>
              <br/>
              <br/>

              ¹Universidade Estadual de Campinas
              ²Universidade de São Paulo
              ³Instituto Nacional de Pesquisas Espaciais
              ⁴Universidade Federal do Rio de Janeiro
            </p>
          </div>
      </aside>
 
  )
}