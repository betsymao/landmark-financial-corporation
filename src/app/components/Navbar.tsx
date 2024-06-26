import {
  Box,
  Container,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  EmailIcon,
} from '@chakra-ui/icons';

import { Image } from '@chakra-ui/react'

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg={'blackAlpha.900'} color={'white'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <Flex
          alignItems={'center'}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              color={'white'}
              bg={'yellow.500'}
              aria-label={'Toggle Navigation'}
              _hover={{
                bg: 'white',
                color: 'yellow.500',
              }}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} alignItems='center'>
              <Button as={'a'} href="/" variant={'link'} textAlign={'center'}>
                <Image src='/logo.svg' alt='Landmark Financial Corporation' />
              </Button>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button 
              as={'a'}
              href='/contact'
              fontSize={'2xl'}
              color={'white'}
              bg={'yellow.500'}
              _hover={{
                bg: 'white',
                color: 'yellow.500',
              }}
            >
                <EmailIcon />
            </Button>
          </Stack>
        </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>

      </Container>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = 'white';
  const linkHoverColor = 'yellow.500';
  const popoverContentBgColor = 'blackAlpha.900';

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
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
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: 'transparent' }}
      >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'yellow.500' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'yellow.500'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={'transparent'}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={'white'}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={'whiteAlpha.400'}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
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
    label: 'About',
    children: [
      {
        label: 'Why choose us?',
        href: '/about/overview',
      },
      {
        label: 'Director',
        href: '/about/director',
      },
      {
        label: 'Lending Partners',
        href: '/about/partners',
      },
    ],
  },
  {
    label: 'Services',
    children: [
      {
        label: 'First Home Buyers',
        href: '/services/first-home-buyers',
      },
      {
        label: 'Home Upgrade',
        href: '/services/home-upgrade',
      },
      {
        label: 'Refinancing',
        href: '/services/refinancing',
      },
      {
        label: 'Investment Property Loans',
        href: '/services/investment-property-loans',
      },
    ],
  },
  {
    label: 'Mortgage Resources',
    children: [
      {
        label: 'Land Transfer (Stamp) Duty Calculator',
        href: 'https://www.e-business.sro.vic.gov.au/calculators/land-transfer-duty',
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];