import { GetStaticProps, NextPage } from 'next';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { MainLayout } from '@/components/layouts';
import { pokeapi } from '@/api';
import { PokemonListResponse, PokemonResult } from '@/interfaces';

interface Props {
  pokemons: PokemonResult[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <MainLayout title="Pokemon App | Pokemon List">
      <h1>Pokemon App</h1>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map(({ id, name, url, img }) => (
          <Grid key={id} xs={12} sm={3} md={2} xl={1}>
            <Card isHoverable isPressable>
              <Card.Body css={{ p: 1 }}>
                <Card.Image height={140} src={img} width="100%" />
              </Card.Body>
              <Card.Footer>
                <Row justify="space-between">
                  <Text transform="capitalize">{name}</Text>
                  <Text># {id}</Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const { data } = await pokeapi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemons: PokemonResult[] = data.results.map(({ name, url }) => {
    const splittedUrl = url.split('/');
    const id = splittedUrl[splittedUrl.length - 2];
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    return {
      name,
      url,
      id: parseInt(id) || 0,
      img,
    };
  });

  return {
    // Will be passed to the page component as props
    props: {
      pokemons,
    },
  };
};

export default HomePage;
