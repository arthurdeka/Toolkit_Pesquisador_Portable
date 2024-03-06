import React, { useState, useEffect } from "react";
import PageTemplate from "./templates/PageTemplate";

/* import logo uni e pibiti */
import LogoUni from "../images/logo-uni-pibiti.png"

function Homepage() {
  return (
    <PageTemplate>
      <div className="flex h-screen md:h-auto xl:gap-y-4 2xl:gap-y-8 flex-col items-center font-montserrat ">
        <h1 className="xl:text-lg 2xl:text-xl text-corprimaria">Esta é a</h1>
        <h1 className="xl:text-4xl 2xl:text-6xl font-bold text-corprimaria">
          Toolkit do Pesquisador
        </h1>
        <img
          src={LogoUni}
          alt="Logo da Unimontes e da PIBITI"
        />
        <div className="h-1/6"></div>
        <div className="text-base max-w-4xl text-center sm:text-md md:text-sm lg:text-lg xl:text-lg">
          <p className="">
            A Toolkit do Pesquisador é um site de utilidades desenvolvido com o intuito de
            auxiliar pesquisadores iniciantes no processo de criação de artigos
            científicos. O programa foi financiado a partir da Bolsa de
            Produtividade em Desenvolvimento Tecnológico e Extensão Inovadora da
            CNPq
          </p>
          <br />
          <h5 className="font-semibold">Autoria:</h5>
          <h4 className="">Arthur Wagner Alves Rodrigues</h4>
          <h4 className="">Árlen Almeida Duarte de Sousa</h4>
        </div>
      </div>
    </PageTemplate>
  );
}

export default Homepage;
