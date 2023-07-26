import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Spacer, Switch, Text, theme, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes'


export const Navbar = () => {

  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const textColor = isDark ? theme?.colors.white.value : theme?.colors.black.value;
  const [backgroundColor, setBackgroundColor] = useState(theme?.colors.gray900.value);

  useEffect(() => {
    setBackgroundColor(isDark ? theme?.colors.gray900.value : theme?.colors.background.value);
  }, [isDark]);

  return (

    <>
      <div style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '0x 20px',
          backgroundColor
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
          <Text h2 style={{ color: textColor }}>P</Text>
        </Link>
        <Link href='/' passHref>
          <Text h3 style={{ color: textColor }}>okémon</Text>
        </Link>
        <Spacer css={{flex: 500}}/>
        <Link href='/favorites' passHref>
          <Text h3 style={{ color: textColor }}>Favoritos</Text>
        </Link>
        <Spacer css={{ flex: 1 }}/>

        <div>
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
          />
        </div>
      </div>
    </>
    

  )
}
