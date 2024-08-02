//import { useState } from 'react'
import './App.css'

function App({colorList}) {
  //const [count, setCount] = useState(0)
  const cardColors = []
  
  for (let i = 0; i < colorList.length; i++) {
    const colors = colorList[i];
    const divList = [];

    for (let j = 0; j < colors.length; j++) {
      divList.push(<div>{colors[j]}</div>)
    }

    cardColors.push(<div className="card">{divList}</div>);
  }

  return cardColors
}

export default App
