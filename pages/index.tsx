import { GetStaticProps, NextPage } from 'next';
import { MainLayout } from '@/components/layouts';

const HomePage: NextPage = props => {
  console.log('Props:', props);

  return (
    <MainLayout title="Pokemon App | Pokemon List">
      <h1>Pokemon App</h1>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = context => {
  return {
    // Will be passed to the page component as props
    props: {
      name: 'Batman',
    },
  };
};

export default HomePage;
