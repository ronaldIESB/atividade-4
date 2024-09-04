import { useState } from 'react'
import './App.css'
import Component1 from './components/FirstComponent'
import Component2 from './components/SecondComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div classname="App"></div>
      <h1>Informações: </h1>
        <Component1 />
        <h3>Times: </h3>
        <Component2 />
    </>
  )
}

export default App
