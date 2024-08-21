import { Link } from "react-router-dom";

import {
  Box,
  Container,
  Grid,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { FcAssistant } from "react-icons/fc";
import { ReactElement } from "react";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, href }: CardProps) => {
  return (
    <Link to={href}>
      <Box
        _hover={{
          borderColor: "yellow.500",
          transition: "0.4s ease",
        }}
        className="services__item"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
      >
        <Stack align={"start"} justify={"space-between"} spacing={2}>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={{ base: "md", md: "lg" }}>
              {description}
            </Text>
          </Box>

          <Text
            className="services__link"
            fontWeight={"bold"}
            fontSize={{ base: "md", md: "lg" }}
            _hover={{
              color: "gray.500",
            }}
          >
            Learn more
            <Icon
              className="services__link-icon"
              h={5}
              w={5}
              as={ChevronRightIcon}
            />
          </Text>
        </Stack>
      </Box>
    </Link>
  );
};

function Services() {
  return (
    <Box id="services" className="services" py={{ base: 8, md: 24 }}>
      <Container maxW={"container.lg"}>
        <Box pb="10">
          <Heading>Featured Services</Heading>
        </Box>
        <Grid
          className="services__list"
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
          }}
          gap={6}
        >
          <Card
            heading={"First Home Buyers"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={"Guidance and support for your first home purchase."}
            href={"/services/first-home-buyers"}
          />
          <Card
            heading={"Home Upgrade"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={"Financing your home upgrade with ease and expertise."}
            href={"/services/home-upgrade"}
          />
          <Card
            heading={"Investment Property Loans"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={"Financing solutions for real estate investors."}
            href={"/services/investment-property-loans"}
          />
          <Card
            heading={"Refinancing"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={"Explore options to lower your current mortgage rate."}
            href={"/services/refinancing"}
          />
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;
