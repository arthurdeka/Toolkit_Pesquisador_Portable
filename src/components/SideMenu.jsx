import React, { useState, useEffect } from "react";

function Button({ desc, link }) {
  return (
    <a
      className="inline-block px-4 py-3 font-medium text-white bg-corprimaria border border-corprimaria rounded active:text-corprimaria hover:bg-transparent hover:text-corprimaria focus:outline-none focus:ring"
      href={link}
    >
      {desc}
    </a>
  );
}

function SideMenu() {
  return (
    <div className="sticky top-0 left-0 w-1/5 h-screen pt-12 bg-gray-200 border-r-4 border-corprimaria">
      <h4 className="pt-10 pb-1 pl-3 font-bold underline text-corprimaria text-md font-inter ">
        Funções:
      </h4>
      <div className="flex flex-col pl-2 pr-2 space-y-1">
        <Button desc="Gerar Referências (ABNT)" link="/gerar-referencias" />
        <Button desc="Contador de Palavras Repetidas" link="/contador-de-palavras" />
        <Button desc="Normas & Formatações" link="/normas-e-formatacao" />
        <Button desc="Downloads" link="/downloads" />
        <Button desc="Sobre" link="/sobre" />
      </div>
    </div>
  );
}

export default SideMenu;
