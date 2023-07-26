import { useEffect, useState } from "react"
import { Container, Text, Image } from "@nextui-org/react"
import { Layout } from "../../components/layouts"
import { Nofavorite } from "../../components/ui"




const FavoritesPage = () => {

  const [favoritePokemon, setfavoritePokemon] = useState<number[]>([]);
  useEffect(() => {
    
  }, [])
  

  return (
    <Layout title="Pokemon - Favoritos">
        <Nofavorite/>
    </Layout>
  )
}

export default FavoritesPage