import { Link } from "react-router-dom";

import {
  Box,
  Container,
  Flex,
  Text,
  IconButton,
  Image,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon, ChevronRightIcon } from "@chakra-ui/icons";

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      {/* Navbar */}
      <Flex bg={"black"} color={"white"} minH={"60px"} py={4}>
        <Container display="flex" maxW="container.lg">
          {/* Navbar items: logo and nav */}
          <Flex flex={{ base: 1 }} align={"center"} justify={"space-between"}>
            {/* Brand logo */}
            <Box>
              <Link to="/">
                <Image
                  src="/assets/logos/logo.svg"
                  alt="Landmark Financial Corporation"
                />
              </Link>
            </Box>

            {/* Desktop nav */}
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          {/* Nav toggle */}
          <Flex align={"center"} display={{ base: "flex", md: "none" }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              colorScheme="yellow"
              variant={"outline"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
        </Container>
      </Flex>

      {/* Mobile nav */}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

export default Navbar;

const DesktopNav = () => {
  const linkColor = "white";
  const linkHoverColor = "yellow.500";
  const popoverContentBgColor = "white";

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link to={navItem.href ?? ""}>
                <Text
                  fontSize={{ md: "md", lg: "lg" }}
                  fontWeight={600}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Text>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                color={"black"}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: "yellow.500" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "black" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"black"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={"white"} color="black" p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  return (
    <Stack spacing={0} className="mobileNav">
      <Link to={href ?? ""} className="mobileNavItem">
        <Text fontWeight={600} color={"black"} className="mobileNavLink">
          {label}
        </Text>
      </Link>

      <Stack spacing={0}>
        {children &&
          children.map((child) => (
            <Link
              key={child.label}
              color={"gray.500"}
              to={child.href!}
              className="mobileNavChildLink"
            >
              {child.label}
            </Link>
          ))}
      </Stack>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Services",
    children: [
      {
        label: "First Home Buyers",
        href: "/services/first-home-buyers",
      },
      {
        label: "Home Upgrade",
        href: "/services/home-upgrade",
      },
      {
        label: "Investment Property Loans",
        href: "/services/investment-property-loans",
      },
      {
        label: "Refinancing",
        href: "/services/refinancing",
      },
    ],
  },
  {
    label: "Resources",
    children: [
      {
        label: "Stamp Duty Calculator",
        href: "https://www.e-business.sro.vic.gov.au/calculators/land-transfer-duty",
      },
    ],
  },
  {
    label: "Contact Us",
    href: "mailto:law@landmarkfinancial.com.au",
  },
];
