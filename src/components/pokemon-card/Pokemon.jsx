import { Link } from 'react-router-dom'

import './pokemon.css'


const PokemonCard = ({ data }) => {
   const { name, imgUrl } = data

   return (
      <Link 
         to={name} 
         className="pokemon flex items-center justify-between px-10 py-10 rounded-2xl px-8 w-[300px] cursor-pointer"
      >
         <div 
            className="inline-block w-28 h-28" 
            style={{
               backgroundImage: `url("${imgUrl}")`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat'
            }}
         >
            
         </div>
         <div className="text-xl text-[#707070]">{name}</div>
      </Link>
   )
}

export default PokemonCard