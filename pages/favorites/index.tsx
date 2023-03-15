import { NextPage } from 'next';
import { MainLayout } from '@/components/layouts';

const FavoritesPage: NextPage = () => {
  return (
    <MainLayout title="Pokemon App | Favorites">
      <h1>Favorites</h1>
    </MainLayout>
  );
};

export default FavoritesPage;
