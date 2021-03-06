import React, { useState } from 'react'

//CSS
import './style.css'

export default function Resume(props) {
  const [showMoreBtn, setShowMoreBtn] = useState('inline')
  const [showLessBtn, setShowLessBtn] = useState('none')
  const [showText, setShowText] = useState('none')

  function handleClick() {

    if(showMoreBtn === 'none'){
      setShowMoreBtn('inline')
    }

    if(showMoreBtn === 'inline'){
      setShowMoreBtn('none')
    }

    if(showLessBtn === 'none'){
      setShowLessBtn('inline')
    }

    if(showLessBtn === 'inline'){
      setShowLessBtn('none')
    }

    if(showText === 'none'){
      setShowText('inline')
    }

    if(showText === 'inline'){
      setShowText('none')
    }
    
    
  }

  return (
    <div className="resume">
      <h3>Resumo</h3>
      <div className="text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis
          mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros
          sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet
          enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem
          vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis
          et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien
          scelerisque, ac gravida eros vestibulum.
          <span style={{ display: `${showMoreBtn}` }}>
            <a onClick={() => handleClick()}> ver mais</a>
          </span>
          <br />
          <br />
          <span style={{ display: `${showText}` }}>
            Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna.
            Proin dapibus consequat feugiat. Proin dictum justo arcu, quis
            vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus
            mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim,
            tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna
            libero, eget interdum eros volutpat ullamcorper. Pellentesque et
            pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec
            ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet
            odio.
            <br />
            <br />
            Nam eget tristique elit, at fermentum tellus. Mauris scelerisque
            ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus.
            Integer scelerisque neque dui, in lacinia erat molestie eu.
            Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim
            quis purus semper, efficitur facilisis turpis. Praesent blandit
            elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar
            lobortis consectetur non odio. Phasellus at lacus hendrerit,
            vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci.
            Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend
            massa, eu posuere mauris odio id odio. Morbi eu libero luctus,
            consectetur lorem vel, interdum sapien. Aenean in porta arcu.
            Maecenas eu maximus massa.
            <br />
            <br />
            Praesent velit dolor, dignissim sed quam ac, efficitur porta justo.
            Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi.
            Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus
            luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh,
            viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu.
            Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus
            placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. <span className='showless' style={{ display: `${showLessBtn}` }}>
              <a onClick={() => handleClick()}> ver menos</a>
            </span>
            
          </span>
        </p>
      </div>
    </div>
  )
}
