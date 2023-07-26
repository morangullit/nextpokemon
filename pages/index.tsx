
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { Layout } from '../components/layouts';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { Grid, Pagination } from '@nextui-org/react';
import { useState } from 'react';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({pokemons}) => {

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getVisiblePokemons = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endindex = Math.min(startIndex + itemsPerPage, pokemons.length);
    return pokemons.slice(startIndex, endindex);
  };

  const visiblePokemons = getVisiblePokemons();


  return (

      <Layout title='Lista de Pokemon'>
        <Grid.Container gap={ 2 } justify='flex-start'>
          {
            visiblePokemons.map( (pokemon)=> (
              <PokemonCard
                key={pokemon.id} pokemon={pokemon}
              />
            ))
          }
        </Grid.Container>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop:'20px' }}>
          <Pagination
            size='lg'
            loop color='primary'
            total={Math.ceil(pokemons.length / itemsPerPage)}
            initialPage={currentPage}
            onChange={handlePageChange}
          />
        </div>
      </Layout>

  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=250');

  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
      ...poke,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i+ 1 }.svg`,
  }) )

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;
