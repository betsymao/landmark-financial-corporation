import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/layout";

import Home from "./pages/home/home";
import About from "./pages/about/about";
import FirstHomeBuyers from "./pages/services/first-home-buyers";
import HomeUpgrade from "./pages/services/home-upgrade";
import InvestmentPropertyLoans from "./pages/services/investment-property-loans";
import Refinancing from "./pages/services/refinancing";

function App() {
  return (
    <>
      <Routes>
        {/* Layout wrapper */}
        <Route path="/" element={<Layout />}>
          {/* Home page */}
          <Route index element={<Home />} />

          {/* About Page */}
          <Route path="/about" element={<About />} />

          {/* Services pages */}
          <Route
            path="/services/first-home-buyers"
            element={<FirstHomeBuyers />}
          />
          <Route path="/services/home-upgrade" element={<HomeUpgrade />} />
          <Route
            path="/services/investment-property-loans"
            element={<InvestmentPropertyLoans />}
          />
          <Route path="/services/refinancing" element={<Refinancing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
