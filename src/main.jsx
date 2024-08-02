import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const colorList = [
  ['Verde', 'Amarillo', 'Rojo'],
  ['Azul', 'Naranja', 'Violeta'],
  ['Negro', 'Morado', 'Celeste']
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App colorList={colorList} />
  </React.StrictMode>,
)
