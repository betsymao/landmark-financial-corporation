import { Container, Box, Heading, Text, VStack } from "@chakra-ui/react";

function FirstHomeBuyers() {
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
              First Home Buyers
            </Heading>
            <Text
              className="banner__text"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight={"semibold"}
            >
              First Home Buyer Mortgage Solutions
            </Text>
          </VStack>
        </Container>
      </Box>

      <Box py={{ base: 8, md: 24 }}>
        <Container maxW={"container.lg"}>
          <Text fontSize={{ base: "lg", md: "xl" }}>
            As a first-time homebuyer, navigating the mortgage process can feel
            overwhelming, but we're here to help every step of the way. Our
            expert team provides personalized mortgage solutions tailored to
            your unique needs and budget. From securing the best rates to
            understanding loan options and application processes, we offer clear
            guidance and support to make your homebuying journey smooth and
            stress-free. Let us turn your dream of homeownership into reality
            with confidence and ease.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}

export default FirstHomeBuyers;
