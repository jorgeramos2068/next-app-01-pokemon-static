import { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { PokemonResult } from '@/interfaces';

interface Props {
  pokemon: PokemonResult;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { id, name, url, img } = pokemon;
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={12} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable onClick={handleRedirect}>
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
  );
};

export default PokemonCard;
