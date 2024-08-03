//import { useState } from 'react'
import CardColor from './card-color/CardColor.jsx'
import data from './data.js'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const CardColorList = []

  for (let i = 0; i < data.length; i++) {
    const colors = data[i];

    CardColorList.push(<div className="card" key={ 'card-' + i }><CardColor colors={colors} /></div>)
  }

  return (
    <>
      <div style={ {display: 'flex' }}>
        { CardColorList }
      </div>
      
      <div id="form" style={ {display: 'grid', textAling: 'left'} }>
        <span><label>Color 1</label><input type="text" id="color1" /></span>
        <span><label>Color 2</label><input type="text" id="color2" /></span>
        <span><label>Color 3</label><input type="text" id="color3" /></span>
        <span><input type="button" value="Enviar" /></span>
      </div>
    </>
  )
}

export default App
