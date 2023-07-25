
import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
    title?: string;
    children: React.ReactNode
}


export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="author" content="Gullit Moran"/>
            <meta name="description" content="Informacion sobre el Pokemos"/>
            <meta name="keywords" content="pokemon, pokedex, poke"/>
        </Head>

        <Navbar/>
        
        <main style={{
            padding: '0px 20px',
        }}>
            { children }
        </main>

    </>
  )
}
