import pokemon from './assets/pokemon.png'
import cutiepoke from './assets/cutiepoke.png'
import triopoke from './assets/triopoke.png'

function Gallery() {
  return (
    <div className='container'>

      <h1>Pokémon Gallery</h1>

      <div className='gallery'>

      <img src={pokemon} alt='pokemon'/>
      <img src={cutiepoke} alt='pokemon'/>
      <img src={triopoke} alt='pokemon'/>

      </div>

    </div>
  )
}

export default Gallery
