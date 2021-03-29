import React from 'react'
import { useState } from 'react'

export function ItemCount( { stock, initial, onAdd}) {
    const [count, setCount] = useState(0);   
    
    const addHandler = () => {
        onAdd(count)
    }
        
        return <div>
            <button disabled={ count <= 0} onClick={() => setCount(count-1)}>-</button>
            <div>{count}</div>
            <button onClick={() => setCount(count+1)}>+</button>
            <button disabled={ count > stock} onClick={addHandler}>agregar</button>
        </div>

}