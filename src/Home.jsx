import './App.css'
import welcomepoke from './assets/welcomepoke.png'

function Home() {
  return (
  <div>
    <h1>Välkommen Trainer</h1>
    <p>De här är min äventyrs blog.</p>
    <img src={welcomepoke}/> 
  </div>
  )
}

export default Home
