
function Post({pokemon}) {
  return (
    <div className="post">
      <h2>{pokemon.title}</h2>
      <p>{pokemon.text}</p>

    </div>
  )
}

export default Post