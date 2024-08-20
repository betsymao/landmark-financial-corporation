import { Container, Box, Heading, Text, VStack } from "@chakra-ui/react";

function Refinancing() {
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
              Refinancing
            </Heading>
            <Text
              className="banner__text"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight={"semibold"}
            >
              Find the Best Refinance Options for Your Needs
            </Text>
          </VStack>
        </Container>
      </Box>

      <Box py={{ base: 8, md: 24 }}>
        <Container maxW={"container.lg"}>
          <Text fontSize={{ base: "lg", md: "xl" }}>
            Our Mortgage Refinance Comparison service simplifies the process by
            providing you with a detailed comparison of the top refinancing
            options available. We assess various lenders and loan terms to help
            you find the most favorable rates and conditions tailored to your
            financial goals. Whether you're aiming to reduce your monthly
            payments, shorten your loan term, or access home equity, our expert
            team ensures you make informed decisions with confidence. Discover
            the best refinancing solutions to optimize your mortgage and achieve
            your financial objectives.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}

export default Refinancing;
