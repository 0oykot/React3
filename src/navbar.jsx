
function Navbar({setPage}) {
  return (
    <nav className="navbar">
      <button onClick={()=> setPage("home")}>Home</button>
      <button onClick={()=> setPage("posts")}>Posts</button>
      <button onClick={()=> setPage("gallery")}>Gallery</button>
      <button onClick={()=> setPage("contact")}>Trainer</button>
    </nav>
  )
}

export default Navbar