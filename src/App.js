import React, {useState} from 'react'
import './App.css';
import ColorForm from './ColorForm';
import ColorList from './ColorList'
import {BrowserRouter, Route,Redirect} from 'react-router-dom';
import ColorPage from './ColorPage'

function App() {
  let [colors, setColors] = useState([{color:'red', name:'red'},{color:'green', name:'green'}])

  let addColor=(color)=>{
    setColors(c=>[...c, color])

  }
  return (
    <BrowserRouter>
      <Route exact path='/color'>
        <ColorForm add={addColor}/>
        <ColorList colors={colors}/>
      </Route>
      <Route exact path='/color/:color'>
        <ColorPage colors={colors}/>
      </Route>
      <Redirect to='/color'></Redirect>
    </BrowserRouter>
  );
}

export default App;
