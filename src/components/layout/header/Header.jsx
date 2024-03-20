import { Box } from '@chakra-ui/react';

import Nav from './Nav';

function Header() {
  return (
    <>
      <Box as="header">
        <Nav />
      </Box>
    </>
  );
}

export default Header;