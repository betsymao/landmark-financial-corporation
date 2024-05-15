import { ReactNode } from 'react';

import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Image src='logo.svg' alt='Landmark Financial Corporation' />
            </Box>
            <Text fontSize={'sm'}>
              Suite 1137/Corner Carrington Road & Thurston Street Box Hill VIC 3128
              Phone: 0413 108 186
              Email: law@landmarkfinancial.com.au
            </Text>
            {/* <Text fontSize={'sm'}>
              Phone: 0413 108 186
            </Text>
            <Text fontSize={'sm'}>
              Email: law@landmarkfinancial.com.au
            </Text> */}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>About</ListHeader>
            <Link href={'#'}>Why choose us?</Link>
            <Link href={'#'}>Director</Link>
            <Link href={'#'}>Lending Partners</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Services</ListHeader>
            <Link href={'#'}>First Home Buyers</Link>
            <Link href={'#'}>Home Upgrade</Link>
            <Link href={'#'}>Refinancing</Link>
            <Link href={'#'}>Investment Property Loans</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Mortgage Resources</ListHeader>
            <Link href={'https://www.e-business.sro.vic.gov.au/calculators/land-transfer-duty'}>Stamp Duty Calculator</Link>
          </Stack>
        </SimpleGrid>
      </Container>
            <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
          }}>
        </Flex>
        <Flex>
          <Box>
            <Text pt={6} fontSize={'sm'} textAlign={'center'}>
              Landmark Financial Corporation Pty Ltd.
              Australian Credit License 123456789
              ABN 1234567891234 
            </Text>
          </Box>
          <Box>
            <Text pt={6} fontSize={'sm'} textAlign={'center'}>
              © 2024 Landmark Financial Corporation Pty Ltd.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}