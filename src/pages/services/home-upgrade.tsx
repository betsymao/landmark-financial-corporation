import { Container, Box, Heading, Text, VStack } from "@chakra-ui/react";

function HomeUpgrade() {
  return (
    <Box>
      <Box
        className="banner"
        height={{ base: "25vh", md: "50vh" }}
        backgroundImage={"url('/assets/images/banner.jpg')"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
      >
        <Container maxW="container.lg">
          <VStack
            color={"white"}
            alignItems={"start"}
            justifyContent="center"
            height={{ base: "25vh", md: "50vh" }}
            spacing={{ base: "1rem", md: "2rem" }}
          >
            <Heading
              className="banner__heading"
              as="h1"
              size={{ base: "2xl", md: "3xl", lg: "4xl" }}
            >
              Home Upgrade
            </Heading>
            <Text
              className="banner__text"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight={"semibold"}
            >
              Home Upgrade Financing Made Simple
            </Text>
          </VStack>
        </Container>
      </Box>

      <Box py={{ base: 8, md: 24 }}>
        <Container maxW={"container.lg"}>
          <Text fontSize={{ base: "lg", md: "xl" }}>
            Our Home Upgrade Finance Service provides tailored solutions to help
            you fund your renovation or improvement projects. Whether you're
            looking to remodel, expand, or upgrade, we offer personalized
            mortgage options and expert advice to make your vision a reality.
            With competitive rates and a seamless application process, securing
            the right financing for your home improvements has never been
            easier. Let us guide you through every step, ensuring you achieve
            your dream home transformation with confidence.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}

export default HomeUpgrade;
