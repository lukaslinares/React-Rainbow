import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm';

function App(){
    let [colors, setColors] = useState([])

    let colorMap = colors.map((color, index) => {
        return (
            <ColorBlock 
              color={color}
              key = {index}
            />
        )
    })

    const addColor = (newColor) => {
        setColors([...colors, newColor])
    }

    return (
        <div className="App">
          {colorMap}
          <div className='button'>
            <ColorForm addColor={addColor} />
          </div>
          <h1>Type Any Color</h1>
        </div>
    )

}

export default App;

