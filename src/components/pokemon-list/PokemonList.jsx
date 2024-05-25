import MPokemonCard from '../pokemon-card/Pokemon'

const PokemonList = ({ filteredData }) => {

   return (
      <div className=' w-full flex justify-center items-center flex-wrap gap-8 mt-10'>
         {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
               <MPokemonCard key={item.name} index={index} data={item} />
            ))
         ) : (
            <p className='text-xl text-[#ff0000]'>По вашему поиску нету совпадений :( </p>
         )}
      </div>
   )
}

export default PokemonList