import React, { useState, useEffect } from "react";
import Homepage from "./components/Homepage.jsx";
import SideMenu from "./components/SideMenu.jsx";
import Header from "./components/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTemplate from "./components/templates/PageTemplate.jsx"
import ContadorDePalavras from "./components/pages/ContadorDePalavras.jsx";
import GerarReferencias from "./components/pages/GerarReferencias.jsx";
import NormasEFormatacao from "./components/pages/NormasEFormatacao.jsx";
import Sobre from "./components/pages/Sobre.jsx";
import Downloads from "./components/pages/Downloads.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <div className=" flex">
        <SideMenu />
        <BrowserRouter basename={"/"}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/gerar-referencias" element={<GerarReferencias/>} />
            <Route path="/contador-de-palavras" element={<ContadorDePalavras/>} />
            <Route path="/normas-e-formatacao" element={<NormasEFormatacao/>} />
            <Route path="/downloads" element={<Downloads/>} />
            <Route path="/sobre" element={<Sobre/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
