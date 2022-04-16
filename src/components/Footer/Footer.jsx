import React from "react";

//CSS
import './style.css'

//image
import footerLogo from '../../assets/img/footerImg.PNG'

export default function Footer(props){
  return(
      <footer className="footer">
         <img src={footerLogo}/>
         <div className="text">
           <p> <strong> Preservar a memória do evento e ampliar o acesso ao conhecimento científico </strong> gerado em eventos é a rezão de ser da plataforma Galoá Proceedings</p>

           <p> Os trabalhos públicos aqui têm um maior alcance e ficam disponiveis para toda a comunidade científicamantendo acesso a debate científico fomentado pelos encontros e aumentando o impacto do evento.</p>
         </div>
         
      </footer>
  
  )
}