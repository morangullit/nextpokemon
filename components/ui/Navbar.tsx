import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Spacer, Switch, Text, useTheme } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';


export const Navbar = () => {

  const { theme } = useTheme();
  const darkMode = useDarkMode(false);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.value.toString());
  }, [darkMode.value]);

  return (

    <>
      <div style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '0x 20px',
          backgroundColor: theme?.colors.gray200.value
      }}>
        <Link href='/' passHref>
          <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
            alt='icono de la app'
            width={70}
            height={70}
          />
        </Link>
        <Link href='/' passHref>
          <Text h2>P</Text>
        </Link>
        <Link href='/' passHref>
          <Text h3>okémon</Text>
        </Link>
        <Spacer css={{flex: 500}}/>
        <Link href='/favorites' passHref>
          <Text h3>Favoritos</Text>
        </Link>
        <Spacer css={{ flex: 1 }}/>

        <div style={{ fontSize: '18px', paddingRight:'10px' }}>{darkMode.value ? 'Dark Mode' : 'Light Mode'}</div>
        <div>
          <Switch
            bordered size='md'
            checked={darkMode.value}
            onChange={() => darkMode.toggle()}
          />
        </div>
      </div>
    </>
    

  )
}
