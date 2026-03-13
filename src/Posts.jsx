import posts from './js/posts.js'
import './App.css'

function Posts() {
  return (
    <div className='posts'>
      <h1>Min Pokémon Blog</h1>

      {posts.map((post) => (
        <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.text}</p>
        </div>
            
      ))}
    </div>
  )
}

export default Posts
