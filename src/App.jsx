import { Routes, Route } from 'react-router-dom';

// components
import Layout from './components/layout/Layout';

// pages
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;