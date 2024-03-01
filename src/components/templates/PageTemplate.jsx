import React, { useState, useEffect } from "react";

function PageTemplate({ titulo, desc, children }) {
  return (
    <div className="w-full px-2 bg-corprimaria">
        <div className="px-8 min-h-full py-4 bg-gray-100 font-inter">
            {/* Caso não seja passado o parâmetro de título, a h3 e a div (linha divisória) não vão aparecer */}
            {titulo ? <h3 className="text-4xl font-inter">{titulo}</h3> : <div/>}
            {titulo ? <div className="my-4 border-b-2 border-gray-400"/> : <div/>}
            {/* caso não seja passado o parâmetro de descrição, a descrição não aparecerá */}
            {desc ? <p>{desc}</p> : <div/>}
            <br /><br /><br />
            {/* aqui será renderizado tags que são children do componente onde ele for utilizado */}
            <div>
                {children}
            </div>
        </div>
    </div>
  );
}

export default PageTemplate;
