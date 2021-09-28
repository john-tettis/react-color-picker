import React, {useState} from 'react';


const ColorForm=({add})=>{

let [formData, setFormData] = useState({
    color:'',
    name:'',
    show:false
})
let toggleForm=()=>{
    setFormData(b=>({...b,show:!b.show}))
}
let updateForm=(e)=>{
    setFormData(form=>({...form,[e.target.name]:e.target.value}))

}
let handleSubmit=(e)=>{
    e.preventDefault()
    let {name, color} = formData
    add({name,color})
    setFormData({
        color:'',
        name:'',
        show:false
    })
}
    return(
        <div className='color-form'>
            { !formData.show ? <a className='color-form-link'onClick={toggleForm}>Pick a new Color</a>:
            <form onSubmit={handleSubmit} className='color-form-form'>
                
                <div className='color-form-form-container'>
                    <label for='color'> Choose your color</label>
                    <input 
                    name='color' 
                    value={formData.color} 
                    type='color'
                    onChange={updateForm}
                    ></input>
                </div>
                <div className='color-form-form-container'>
                    <label for='name'> Name your color!</label>
                    <input 
                    className='color-form-text-input'
                    value={formData.name} 
                    onChange={updateForm}
                    name='name' 
                    type='text'></input>
                </div>
                <button className='color-form-button'>Add color</button>

            </form>
            }

        </div>
    )

}


export default ColorForm