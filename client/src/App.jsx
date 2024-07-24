import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/navbar/Layout';
import Accueil from './components/accueil/Accueil';
import Contact from './components/contact/Contact';
import Panier from './components/panier/Panier';
import About from './components/about/About';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Accueil />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/about" element={<About />} />
        </Route>


      </Routes>
    </BrowserRouter>
  );
};

export default App;
