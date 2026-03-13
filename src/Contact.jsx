import './App.css'
import welcomepoke from './assets/welcomepoke.png'

function Contact() {
  return (
  <div>
    <h1>Hej Trainer!</h1>
    <p>Om du behöver hjälp så kan du nå mig på mitt mejl</p>
    <p>Trainer.pokémon@gmail.com</p>
    <img src={welcomepoke}/> 
    
  </div>
  )
}

export default Contact