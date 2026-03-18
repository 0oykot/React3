import { useState } from 'react'
import Navbar from './navbar'
import Gallery from './Gallery'
import Posts from './Posts'
import Home from './Home'
import Contact from './Contact'
import './App.css'

function App() {

  const [page, setPage] = useState("home")

  return (
    <>
    <Navbar setPage={setPage}/>

    {page === 'home' && <Home/>}
    {page === 'posts' && <Posts/>}
    {page === 'gallery' && <Gallery/>}
    {page === 'contact' && <Contact/>}
    </>
  )
}

export default App
