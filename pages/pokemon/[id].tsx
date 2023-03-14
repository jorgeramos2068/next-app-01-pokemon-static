import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { pokeapi } from '@/api';
import { PokemonItem } from '@/interfaces';
import { MainLayout } from '@/components/layouts';

interface Props {
  pokemon: PokemonItem;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <MainLayout title="Pokemon App | Pokemon">
      <h1>{pokemon.name}</h1>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async context => {
  const pokemonList = [...Array(151)].map((_, index) => `${index + 1}`);

  return {
    paths: pokemonList.map(id => ({
      params: { id },
    })),
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeapi.get<PokemonItem>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
