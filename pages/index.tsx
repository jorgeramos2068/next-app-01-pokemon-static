import { NextPage } from 'next';
import { Button } from '@nextui-org/react';
import { MainLayout } from '@/components/layouts';

const HomePage: NextPage = () => {
  return (
    <MainLayout title="Pokemon App | Pokemon List">
      <h1>Hello World</h1>
      <Button color="gradient">Hello World</Button>
    </MainLayout>
  );
};

export default HomePage;
