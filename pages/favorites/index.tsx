import { useEffect, useState } from "react"
import { Layout } from "../../components/layouts"
import { Nofavorite } from "../../components/ui"
import { localFavorites } from "../../utils"
import { FavoritePokemon } from "../../components/pokemon"


const FavoritesPage = () => {

  const [favoritePokemon, setfavoritePokemon] = useState<number[]>([]);
  useEffect(() => {
    setfavoritePokemon(localFavorites.pokemons());
  }, [])


  return (
    <Layout title="Pokemon - Favoritos">

      {
        favoritePokemon.length === 0
          ? (<Nofavorite />)
          : (<FavoritePokemon pokemon={favoritePokemon}/>)
      }

    </Layout>
  )
}

export default FavoritesPage