import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/navbar/Layout';
import Accueil from './components/accueil/Accueil';
import Contact from './components/contact/Contact';
import CreateAccount from './components/login/CreateAccount'
import Login from './components/login/login'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />} >
          <Route index element={<Accueil />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login/>} />
        </Route>

      </Routes>

    
    </BrowserRouter>

    
    
  );

};

export default App;
