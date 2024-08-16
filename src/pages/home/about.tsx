import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";

function About() {
  return (
    <Box
      className="about"
      height={"100%"}
      backgroundImage={"url('/assets/images/about.jpg')"}
      backgroundPosition={"70% 35%"}
      backgroundSize={"cover"}
      py={{ base: 8, md: 24 }}
    >
      <Container maxW={"container.lg"}>
        <VStack
          color={"white"}
          alignItems={"start"}
          justifyContent={"space-between"}
          height={"100%"}
          spacing={{ base: "1rem", md: "2rem" }}
        >
          <Heading className="about__heading">
            Professionalised Mortgage Services
          </Heading>
          <Text className="about__text">
            Navigating the mortgage market can be overwhelming, but with our
            professional mortgage broker comparison services, you can make
            informed choices with ease. Our team is dedicated to helping you
            find the best mortgage solutions tailored to your needs.
          </Text>
          <Button
            className="about__cta"
            as="a"
            href="/about"
            bgColor="yellow.500"
            border="1px"
            borderColor="transparent"
            color="white"
            _hover={{
              bgColor: "transparent",
              borderColor: "yellow.500",
              color: "yellow.500",
              textDecoration: "none",
            }}
          >
            Learn more
            <Icon
              className="about__cta-icon"
              h={5}
              w={5}
              as={ChevronRightIcon}
            />
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}

export default About;
