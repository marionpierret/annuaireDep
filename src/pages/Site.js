import React from "react";
import Accueil from "./Accueil";
import Localisation from "./Localisation";
import Contact from "./Contact";
import NavBar from "../components/NavBar";
import { Route, Routes, Navigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Footer from "../components/Footer"


const Site = () => {
  return (
    <div>
    <div className="site">
      <NavBar />
      <Container>
        <Routes>
          <Route path="/localisation" element={<Localisation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Accueil />} />
          <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
      </Container>
      <div className ="minSite"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Site;
