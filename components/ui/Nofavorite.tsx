import { Container, Image, Text } from "@nextui-org/react"


export const Nofavorite = () => {
  return (
    <Container css={{
        display: 'flex',
        flexdirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
        <Text h1>
          No hay favoritos
        </Text>
          <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg'
            alt="No hay favoritos"
            width={250}
            height={250}
            css={{
              opacity:0.1
            }}
          />
      </Container>
  )
}
