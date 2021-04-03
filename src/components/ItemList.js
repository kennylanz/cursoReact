import React from 'react'
import {item} from './Item'


            
export const ItemList = ({items}) => {

    return <>
            {items.map( elemento => <Item item={elemento} /> )} {

            }
            </>

}