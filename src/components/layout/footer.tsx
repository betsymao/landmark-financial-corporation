import { Link } from "react-router-dom";

import { ReactNode } from "react";

import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import { BsHouse, BsTelephone, BsEnvelope } from "react-icons/bs";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as="h5" size="md" fontWeight={"600"} mb={2} color={"yellow.500"}>
      {children}
    </Heading>
  );
};

function Footer() {
  return (
    <Box
      bg={"black"}
      color={"white"}
      pt={{ base: 4, md: 10 }}
      pb={{ base: 4, md: 0 }}
    >
      <Container as={Stack} maxW="container.lg">
        <SimpleGrid
          templateColumns={{
            sm: "1fr",
            md: "1fr 1fr 1fr",
          }}
          spacing={8}
        >
          <Stack align={"flex-start"}>
            <ListHeader>Our Company</ListHeader>
            <Box>
              <Text as="a" href="/about" className="footerNavLink">
                About Us
              </Text>
            </Box>
            <Box>
              <Text as="a" href="/about/#partners" className="footerNavLink">
                Partners
              </Text>
            </Box>
            <Box>
              <Link
                to="mailto:law@landmarkfinancial.com.au"
                className="footerNavLink"
              >
                Contact Us
              </Link>
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Our Services</ListHeader>
            <Box>
              <Link to="/services/first-home-buyers" className="footerNavLink">
                First Home Buyers
              </Link>
            </Box>
            <Box>
              <Link to="/services/home-upgrade" className="footerNavLink">
                Home Upgrade
              </Link>
            </Box>
            <Box>
              <Link
                to="/services/investment-property-loans"
                className="footerNavLink"
              >
                Investment Property Loans
              </Link>
            </Box>
            <Box>
              <Link to="/services/refinancing" className="footerNavLink">
                Refinancing
              </Link>
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Contact Us</ListHeader>
            <Flex alignItems={"center"} pb={2}>
              <Icon as={BsHouse} mr={"4"} />
              <Text>Suite 10/1 Main St, Box Hill VIC 3128</Text>
            </Flex>
            <Flex alignItems={"center"} pb={2}>
              <Icon as={BsTelephone} mr={"4"} />
              <Text>0413 108 186</Text>
            </Flex>
            <Flex alignItems={"center"}>
              <Icon as={BsEnvelope} mr={"4"} />
              <Text>law@landmarkfinancial.com.au</Text>
            </Flex>
          </Stack>
        </SimpleGrid>

        <Flex
          borderTop={"1px solid"}
          borderColor={"gray.700"}
          direction={{ base: "column", md: "row" }}
          justify={{ md: "space-between" }}
          align={{ md: "flex-end" }}
          mt={{ base: 2, md: 6 }}
        >
          <Box py={4}>
            <Text fontSize={"sm"}>
              Landmark Financial Corporation Pty Ltd.<br></br>
              Australian Credit License 123456789<br></br>
              ABN 1234567891234
            </Text>
          </Box>
          <Box py={{ base: 0, md: 4 }}>
            <Text fontSize={"sm"}>
              © 2024 Landmark Financial Corporation Pty Ltd.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
