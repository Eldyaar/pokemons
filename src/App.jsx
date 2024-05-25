import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import PokemonList from './components/pokemon-list/PokemonList'
import SinglePokemonPage from './components/single-pokemon-page/SinglePokemonPage'
import Layout from './components/layout/Layout'

const App = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

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
      } catch (e) {
        console.error(`error: ${e}`)
        return null
      }
    }

    getData()
  }, [])

  const filteredData = data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <Routes>
      <Route path='/' element={<Layout search={search} setSearch={setSearch} />}>
        <Route index element={<PokemonList filteredData={filteredData} />} />
        <Route path='/:pokemonName' element={<SinglePokemonPage data={data} />} />
      </Route>
    </Routes>
  )
}

export default App