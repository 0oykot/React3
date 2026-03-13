import { useState } from 'react'
import navbar from "/navbar"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <navbar setPage={setPage}/>
    </>
  )
}

export default App
