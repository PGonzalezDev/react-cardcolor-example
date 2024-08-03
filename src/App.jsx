//import { useState } from 'react'
import CardColor from './card-color/CardColor.jsx'
import data from './data.js'
import './App.css'



function App() {
  //const [count, setCount] = useState(0)
  const CardColorList = []

  for (let i = 0; i < data.length; i++) {
    const colors = data[i];

    CardColorList.push(<div className="card" id={i}><CardColor colors={colors} /></div>)
  }

  return CardColorList
}

export default App
