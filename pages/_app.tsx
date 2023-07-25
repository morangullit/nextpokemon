
import { NextUIProvider, createTheme } from '@nextui-org/react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import useDarkMode from 'use-dark-mode';


const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {},
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {},
  }
})


function MyApp({ Component, pageProps }: AppProps) {

  const darkMode = useDarkMode();


  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
