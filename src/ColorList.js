import React from 'react';
import {Link} from 'react-router-dom'

const ColorList=({colors})=>{

    return(
        <div className='color-list'>
            <h2>Select a color:</h2>
            <ul>
                {colors.map(c=><li key={c.color} style={{color:c.color}}><Link to={`/color/${c.name}`}>{c.name}</Link></li>)}
            </ul>
        </div>
    )

}


export default ColorList