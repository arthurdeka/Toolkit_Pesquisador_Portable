import React, { useState, useEffect } from "react";

function Header() {
  return (
    <header className="sticky top-0 left-0 z-50 flex flex-col text-center w-full  bg-corprimaria">
      <a href="/" link="/">
        <h1 className="pt-2 text-2xl font-bold text-white font-inter">
          Toolkit do Pesquisador
        </h1>
        <h6 className="pb-2 my-auto text-xs font-bold text-gray-300 font-inter">
          Ferramentas & aplicações
        </h6>
      </a>
    </header>
  );
}

export default Header;
