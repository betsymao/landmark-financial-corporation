import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";

function Partners() {
  return (
    <Box id="partners" py={{ base: 8, md: 24 }}>
      {/* <Script
    type="text/javascript"
    id="hs-script-loader"
    async
    defer
    src="../../js/main.js"
  /> */}

      <Container maxW={"container.lg"}>
        <Heading>Our Partners</Heading>
        <Text
          className="about__text"
          fontSize={{ base: "lg", md: "xl" }}
          my={{ base: 4, md: 8 }}
        >
          We connect you with top lenders and banks, ensuring you get the best
          rates and terms. Trust our expert guidance to make informed decisions
          and secure the perfect mortgage for your needs.
        </Text>
        <div className="owl-theme owl-carousel">
          <div className="item">
            <Image src="/assets/partners/amp.png" alt="AMP" />
          </div>
          <div className="item">
            <Image src="/assets/partners/angle.png" alt="Angle Finance" />
          </div>
          <div className="item">
            <Image src="/assets/partners/anz.png" alt="ANZ" />
          </div>
          <div className="item">
            <Image src="/assets/partners/bb.png" alt="Bendigo Bank" />
          </div>
          <div className="item">
            <Image
              src="/assets/partners/bluestone.png"
              alt="Bluestone Home Loans"
            />
          </div>
          <div className="item">
            <Image src="/assets/partners/boc.png" alt="Bank of China" />
          </div>
          <div className="item">
            <Image src="/assets/partners/bom.png" alt="Bank of Melbourne" />
          </div>
          <div className="item">
            <Image src="/assets/partners/boq.png" alt="Bank of Queensland" />
          </div>
          <div className="item">
            <Image src="/assets/partners/bos.png" alt="Bank of China" />
          </div>
          <div className="item">
            <Image src="/assets/partners/bw.png" alt="Bankwest" />
          </div>
          <div className="item">
            <Image src="/assets/partners/cmb.png" alt="Commonwealth Bank" />
          </div>
          <div className="item">
            <Image src="/assets/partners/finsure.png" alt="Finsure Loans" />
          </div>
          <div className="item">
            <Image src="/assets/partners/firstmac.png" alt="Firstmac" />
          </div>
          <div className="item">
            <Image src="/assets/partners/funding.png" alt="Funding" />
          </div>
          <div className="item">
            <Image src="/assets/partners/honey.png" alt="Honey" />
          </div>
          <div className="item">
            <Image src="/assets/partners/ing.png" alt="ING" />
          </div>
          <div className="item">
            <Image src="/assets/partners/lat.png" alt="Latitude" />
          </div>
          <div className="item">
            <Image
              src="/assets/partners/latrobefinancial.png"
              alt="Latrobe Financial"
            />
          </div>
          <div className="item">
            <Image src="/assets/partners/liberty.png" alt="Liberty" />
          </div>
          <div className="item">
            <Image src="/assets/partners/ma.png" alt="MA Money" />
          </div>
          <div className="item">
            <Image src="/assets/partners/macquarie.png" alt="Macquarie" />
          </div>
          <div className="item">
            <Image src="/assets/partners/mp.png" alt="MoneyPlace" />
          </div>
          <div className="item">
            <Image src="/assets/partners/nab.png" alt="NAB" />
          </div>
          <div className="item">
            <Image src="/assets/partners/peppermoney.png" alt="Pepper Money" />
          </div>
          <div className="item">
            <Image src="/assets/partners/prospa.png" alt="Prospa" />
          </div>
          <div className="item">
            <Image src="/assets/partners/resimac.png" alt="Resimac" />
          </div>
          <div className="item">
            <Image src="/assets/partners/stgeorge.png" alt="St.George Bank" />
          </div>
          <div className="item">
            <Image src="/assets/partners/suncorp.png" alt="Suncorp" />
          </div>
          <div className="item">
            <Image src="/assets/partners/virginmoney.png" alt="Virgin Money" />
          </div>
          <div className="item">
            <Image src="/assets/partners/westpac.png" alt="Westpac" />
          </div>
          <div className="item">
            <Image src="/assets/partners/wisr.png" alt="Wisr" />
          </div>
        </div>
      </Container>
    </Box>
  );
}

export default Partners;
