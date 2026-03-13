import { useState } from 'react'
import Navbar from "./navbar"
import './App.css'

function App() {

  const [count, setPage] = useState("home")

  return (
    <>
    <Navbar setPage={setPage}/>

    {page === "home" && <h1>Home</h1>}
    {page === "posts" && <h1>Posts</h1>}
    {page === "gallery" && <h1>Gallery</h1>}
    {page === "about" && <h1>About</h1>}
    </>
  )
}

export default App
