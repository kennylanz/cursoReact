import React from 'react'
import { ItemCount } from './ItemCount'

export const ItemListContainer = (props) => {
    const agregado = (num) => {console.log('se agrego un producto', num)};

    return (
        <div>
            <h4>{props.greeting}</h4>
            <div>
                <ItemCount initial={1} stock={15} onAdd={agregado}  />
            </div>
        </div>
    )


}