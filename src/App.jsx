import { useState, useEffect } from 'react'
import axios from 'axios'

import PokemonCard from './components/pokemon-card/Pokemon'
import './App.css'


const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')

        const allData = await Promise.all(response.data.results.map(async (item) => {
          const imgResponse = await axios.get(item.url)
          const imgUrl = imgResponse.data.sprites.back_default

          return { ...item, imgUrl }
        }))

        setData(allData)
        console.log(data)
      } catch (e) {
        console.error(`error: ${e}`)
        return null
      }
    }

    getData()
  }, [])

  return (
    <div className='container max-w-960 m-auto'>
      <h1 className='text-5xl text-black font-medium mb-10 mt-10 text-center'>Pokemon List</h1>
      <div className=' w-full flex justify-center items-center flex-wrap gap-8'>
        {data.map((item, index) => (
          <PokemonCard key={index} data={item} />
        ))}
      </div>
    </div>
  )
}

export default App