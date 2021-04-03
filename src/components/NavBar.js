import React from 'react'
import {CartWidget} from './CartWidget'

export const NavBar = () => {
    return <> 
          <h1>Melodic Space</h1>
        <nav>
          <ul>
            <li><a href="">Vídeos</a></li>
            <li><a href="">Solo Audio</a></li>
            <li><a href="">Fotos</a></li>
          </ul>
        </nav>
        <CartWidget />
        </>;  
}

export default NavBar