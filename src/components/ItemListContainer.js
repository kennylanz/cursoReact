import React, { useEffect, useState } from 'react'
import { ItemCount } from './ItemCount'
import {ItemList} from './ItemList'


const datos =   [{id:1, titulo:'remeras', descripcion:'remeras rojas', precio:2500, Urldelafoto:''},
                {id:23, titulo:'pantalon', descripcion:'pantalon de jean', precio:3500, Urldelafoto:''},
                {id:18, titulo:'medias', descripcion:'medias lindas', precio:500, Urldelafoto:''}]


   export const ItemListContainer = (props) => {

        const [resultadoDeItems, setResultadoDeItems] = useState([])

    useEffect(() => {
       const llamadAlServidor= new Promise ((resolve, reject) =>{

            setTimeout(() => {resolve(datos)},2000)
        })

        llamadAlServidor.then((datos) =>{
            setResultadoDeItems(datos)

        })
    })
    const agregado = (num) => {console.log('se agrego un producto', num)};

    return (
            <div>
            <h4>{props.greeting}</h4>
            <ItemList items = {resultadoDeItems} />
            <div>
                <ItemCount initial={1} stock={15} onAdd={agregado}/>
            </div>
        </div>
    )


}