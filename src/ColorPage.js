import React from 'react'
import {Link, useParams, Redirect} from 'react-router-dom'


const ColorPage=({colors})=>{
    let {color}= useParams()
    color = colors.find(c=>c.name==color)
    if(!color){
        return <Redirect to='/color'/>
    }

    
    let complement = 0xffffff ^ color.color;
    let style={
        backgroundColor:color.color,
        color:complement
    }
    
    return(
        <div style={style}className='color-page'>
            <div className='color-page-container'>
                <h1>Cool color!</h1>
                <Link to='/color'>Return home</Link>
            </div>
        </div>
    )

}

export default ColorPage