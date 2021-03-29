import React from 'react'
import {CartWidget} from './CartWidget'

export const NavBar = () => {
    return <> 
          <h3>La tienda</h3>
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