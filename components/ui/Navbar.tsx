import Image from 'next/image';
import NextLink from 'next/link';
import { Link, Spacer, Text, useTheme } from '@nextui-org/react';
import { FC } from 'react';

export const Navbar: FC = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        alignItems: 'center',
        backgroundColor: theme?.colors.gray100.value,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        padding: '0 20px',
        width: '100%',
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="App icon"
        width={70}
        height={70}
      />
      <NextLink href="/" legacyBehavior>
        <Link
          css={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
          }}
        >
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemon
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" legacyBehavior>
        <Link>
          <Text color="white">Favorites</Text>
        </Link>
      </NextLink>
    </div>
  );
};

export default Navbar;
