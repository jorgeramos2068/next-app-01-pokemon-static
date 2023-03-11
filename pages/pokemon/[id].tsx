import { useRouter } from 'next/router';
import { MainLayout } from '@/components/layouts';

const PokemonPage = () => {
  const router = useRouter();

  return (
    <MainLayout title="Pokemon App | Pokemon">
      <h1>Hello World</h1>
    </MainLayout>
  );
};

export default PokemonPage;
