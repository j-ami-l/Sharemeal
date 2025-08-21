import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sidebar></Sidebar>
    </>
  )
}

export default App
