
const PokemonCard = ({ data }) => {
   const { name, imgUrl } = data

   return (
      <div className="flex items-center justify-between px-10 py-10 bg-[#add8e6] rounded-2xl px-8">
         <div className="inline-block w-28 h-28">
            <img src={imgUrl} alt="pokemon_img" className="w-28 h-28" />
         </div>
         <div className="text-xl">{name}</div>
      </div>
   )
}

export default PokemonCard