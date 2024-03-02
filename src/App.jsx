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
        <BrowserRouter>
          <Routes>
            <Route path="/Toolkit_Pesquisador_Portable" element={<Homepage />} />
            <Route path="/Toolkit_Pesquisador_Portable/gerar-referencias" element={<GerarReferencias/>} />
            <Route path="/Toolkit_Pesquisador_Portable/contador-de-palavras" element={<ContadorDePalavras/>} />
            <Route path="/Toolkit_Pesquisador_Portable/normas-e-formatacao" element={<NormasEFormatacao/>} />
            <Route path="/Toolkit_Pesquisador_Portable/downloads" element={<Downloads/>} />
            <Route path="/Toolkit_Pesquisador_Portable/sobre" element={<Sobre/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
