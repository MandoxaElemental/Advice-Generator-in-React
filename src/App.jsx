import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdviceScreen from './components/AdviceGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AdviceScreen/>
    </>
  )
}

export default App
