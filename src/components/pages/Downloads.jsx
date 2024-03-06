import React, { useState, useEffect } from "react";
import PageTemplate from "../templates/PageTemplate";
import CollapseCard from "../templates/CollapseCard";
import LinhaDivisoria from "../templates/LinhaDivisoria";
import { Tooltip } from "flowbite-react";

function Downloads() {
  return (
    <PageTemplate
      titulo="Downloads"
      desc="Acesso às versões da Toolkit do pesquisador, acesso ao código fonte."
    >
      {/* eventualmente lembrar de adicionar: Função de gerador de texto descontinuada */}
      <div className="w-full lg:w-10/12 xl:w-6/12 mx-auto">
        {/* tabela */}
        <h5 className="mb-2 text-center text-wrap">
          Versões e detalhes sobre a Toolkit do Pesquisador.
        </h5>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 rtl:text-right ">
            <thead className="text-xs text-white uppercase bg-corsecundaria ">
              <tr>
                <th className="px-6 py-3">Versão</th>
                <th className="px-6 py-3">Descrição</th>
                <th className="px-6 py-3">Link de Download</th>
              </tr>
            </thead>
            <tbody id="tabela_itens">
              <tr className="bg-white hover:bg-gray-50 ">
                <th
                  scope="row"
                  className="px-6 py-2 font-medium text-gray-900 "
                >
                  1.2 - Atualização de Interface
                </th>
                <td className="px-6 py-2">
                  Implementado tecnologia REACT & feita revisão de interface.
                </td>
                <td className="px-6 py-2 text-center">
                  <a
                    target="_blank"
                    className="inline-block font-semibold text-center border-b-2 border-corprimaria text-corprimaria"
                    href="https://github.com/arthurdeka/Toolkit_Pesquisador_Portable"
                  >
                    Github
                  </a>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-50 ">
                <th
                  scope="row"
                  className="px-6 py-2 font-medium text-gray-900 "
                >
                  1.1 - Atualização para Web
                </th>
                <td className="px-6 py-2">
                  Aplicação convertida de Python para uma versão hospedada na
                  Web. Função de buscar sinônimos não disponível online.
                </td>
                <td className="px-6 py-2">
                  <a
                    target="_blank"
                    className="inline-block font-semibold text-center border-b-2 border-corprimaria text-corprimaria"
                    href="https://drive.google.com/file/d/1cjjLNlejL45iuEIyMpfz8CQaQJIMkiED/view?usp=sharing"
                  >
                    Google Drive
                  </a>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-50 ">
                <th
                  scope="row"
                  className="px-6 py-2 font-medium text-gray-900 "
                >
                  1.0 - Versão Original
                </th>
                <td className="px-6 py-2">
                  Pyhon necessário para a execução, leia o README para
                  dependências
                </td>
                <td className="px-6 py-2">
                  <a
                    target="_blank"
                    className="inline-block font-semibold text-center border-b-2 border-corprimaria text-corprimaria"
                    href="https://drive.google.com/file/d/1pPTABZF7I02UzeX6Sxwz1MUixUmSyUsM/view?usp=sharing"
                  >
                    Google Drive
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </PageTemplate>
  );
}

export default Downloads;
