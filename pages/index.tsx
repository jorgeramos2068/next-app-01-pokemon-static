import { GetStaticProps, NextPage } from 'next';
import { MainLayout } from '@/components/layouts';
import { pokeapi } from '@/api';
import { PokemonListResponse, PokemonResult } from '@/interfaces';

interface Props {
  pokemons: PokemonResult[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log('Poke 2:', pokemons);
  return (
    <MainLayout title="Pokemon App | Pokemon List">
      <h1>Pokemon App</h1>
      <ul>
        {pokemons.map(({ id, name }) => (
          <li>
            {id} - {name}
          </li>
        ))}
      </ul>
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
