import { useState } from 'react'
import './App.css'
import DynamicBackground from './components/DynamicBackground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <DynamicBackground/>
    </>
  )
}

export default App
