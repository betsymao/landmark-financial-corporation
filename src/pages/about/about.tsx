import { Container, Box, Heading, Text, VStack } from "@chakra-ui/react";

import Partners from "../../components/partners";

function About() {
  return (
    <>
      <Box
        className="banner"
        height={{ base: "25vh", md: "50vh" }}
        backgroundImage={"url('/assets/images/banner2.jpg')"}
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
              About Us
            </Heading>
            <Text
              className="banner__text"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight={"semibold"}
            >
              Why choose us?
            </Text>
          </VStack>
        </Container>
      </Box>
      <Box pt={{ base: 8, md: 24 }}>
        <Container maxW={"container.lg"}>
          <Text fontSize={{ base: "lg", md: "xl" }}>
            With over 18 years of extensive experience in the banking sector,
            including roles at NAB, CBA, ANZ and Westpac, we offer unparalleled
            expertise in financial brokerage.
          </Text>
          <Text fontSize={{ base: "lg", md: "xl" }} mt={{ base: 4, md: 8 }}>
            Our deep understanding of the industry allow us to provide tailored
            solutions that meet your unique financial needs and goals. Just in
            our proven track record and dedication to delivering excellence in
            every aspect of financial services.
          </Text>
        </Container>
      </Box>
      <Partners />
    </>
  );
}

export default About;
