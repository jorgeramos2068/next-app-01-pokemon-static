import { GetStaticProps, NextPage } from 'next';
import { Grid } from '@nextui-org/react';
import { pokeapi } from '@/api';
import { MainLayout } from '@/components/layouts';
import { PokemonCard } from '@/components/pokemon';
import { PokemonListResponse, PokemonResult } from '@/interfaces';

interface Props {
  pokemons: PokemonResult[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <MainLayout title="Pokemon App | Pokemon List">
      <h1>Pokemon App</h1>
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
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
