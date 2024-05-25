import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const pokemonAnimation = {
   hidden: {
      x: 100,
      opacity: 0,
   },
   visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay:  custom * 0.2 },
   }),
}


const SinglePokemonPage = ({ data }) => {
   const { pokemonName } = useParams()
   const [currentPokemon, setCurrentPokemon] = useState(null)

   useEffect(() => {
      const fetchData = () => {
         const currentPokemonData = data.filter((item) => item.name === pokemonName)
         if (currentPokemonData.length > 0) {
            setCurrentPokemon(currentPokemonData[0])
         }
      }

      fetchData()
   }, [pokemonName, data])

   if (!currentPokemon) {
      return <div className="w-[200px] m-auto text-2xl">Loading...</div>
   }
   
   const { name, imgUrl } = currentPokemon

   return (
      <div className="container max-w-960 m-auto pt-10">
         <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-[400px] m-auto flex flex-col items-center gap-6"
         >
            <motion.div 
               custom={1}
               variants={pokemonAnimation}
               className="w-full h-[250px]" 
               style={{
                  backgroundImage: `url('${imgUrl}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
               }}>
            </motion.div>
            <motion.div 
               custom={2}
               variants={pokemonAnimation}
               className="text-2xl uppercase"
            >
               { name }
            </motion.div>
         </motion.div>
      </div>
   )
}

export default SinglePokemonPage