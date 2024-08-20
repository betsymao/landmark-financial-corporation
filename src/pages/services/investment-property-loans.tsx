import { Container, Box, Heading, Text, VStack } from "@chakra-ui/react";

function InvestmentPropertyLoans() {
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
              Investment Property Loans
            </Heading>
            <Text
              className="banner__text"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight={"semibold"}
            >
              Empowering Your Real Estate Ventures and Building Dreams
            </Text>
          </VStack>
        </Container>
      </Box>

      <Box py={{ base: 8, md: 24 }}>
        <Container maxW={"container.lg"}>
          <Text fontSize={{ base: "lg", md: "xl" }}>
            Unlock the potential of property investment and construction with
            our specialized loan services. Whether you're investing in rental
            properties or embarking on a new construction project, our tailored
            loan solutions are designed to meet your specific needs.
          </Text>
          <Text fontSize={{ base: "lg", md: "xl" }} mt={{ base: 4, md: 8 }}>
            <Text as="b">Property Investment Loans:</Text> Secure competitive
            financing to grow your real estate portfolio. We offer flexible
            terms and expert guidance to help you maximize returns and achieve
            your investment goals.
          </Text>
          <Text fontSize={{ base: "lg", md: "xl" }} mt={{ base: 4, md: 8 }}>
            <Text as="b">Construction Loans:</Text> Bring your construction
            projects to life with customized loan options that support
            everything from initial planning to project completion. Our team
            provides clear advice and efficient processing to keep your project
            on track. Let us help you navigate the complexities of property
            investment and construction financing with ease and confidence.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}

export default InvestmentPropertyLoans;
