import React, { useState, useEffect } from "react";
import PageTemplate from "../templates/PageTemplate";
import { Tooltip } from "flowbite-react";

function ContadorDePalavras() {
  const [textoEntrada, setTextoEntrada] = useState("");
  const [tabela, setTabela] = useState([]);
  const [totalPalavras, setTotalPalavras] = useState("0");
  const [tempoLeitura, setTempoLeitura] = useState("0 Minutos.");
  const [totalCaracteresEspaco, setTotalCaracteresEspaco] = useState("0");
  const [totalCaracteres, setTotalCaracteres] = useState("0");

  function contarPalavras() {
    /* adiciona as palavras mais utilizadas do texto na tabela */
    function contarPalavrasTabela(texto) {
      // Remover pontuações e converter para minúsculas
      texto = texto.toLowerCase();

      // Dividir o texto em palavras
      let palavras = texto.split(/\s+/);

      // Criar um objeto para armazenar a contagem de cada palavra
      let contagem = {};

      // Iterar sobre cada palavra e contar a ocorrência
      palavras.forEach(function (palavra) {
        // Excluir palavras com 3 ou menos caracteres
        if (palavra.length > 3) {
          if (contagem[palavra]) {
            contagem[palavra]++;
          } else {
            contagem[palavra] = 1;
          }
        }
      });

      // Converter o objeto de contagem em uma lista de pares [palavra, contagem]
      var listaContagem = [];
      for (var palavra in contagem) {
        listaContagem.push([palavra, contagem[palavra]]);
      }

      // Ordenar a lista em ordem decrescente com base nas contagens
      listaContagem.sort(function (a, b) {
        return b[1] - a[1];
      });

      // Limitar a lista para os primeiros 15 itens
      const itensLimitados = listaContagem.slice(0, 10);

      return itensLimitados;
    }

    /* conta a quanidade de palavras no texto */
    function contarQuantidadePalavras(texto) {
      //contar quantidade de palavras
      let totalDePalavras = texto.trim();
      if (totalDePalavras == "") {
        totalDePalavras = "0";
      } else {
        totalDePalavras = totalDePalavras.split(/\s+/);
        totalDePalavras = totalDePalavras.length;
      }
      return String(totalDePalavras);
    }

    /* calcula o tempo de leitura */
    function contarTempoLeitura(texto) {
      //contar quantidade de palavras
      let totalDePalavras = texto.trim();
      if (totalDePalavras == "") {
        totalDePalavras = "0";
      } else {
        totalDePalavras = totalDePalavras.split(/\s+/);
        totalDePalavras = totalDePalavras.length;
      }

      // com o uso da quantidade de palavras, calcula o tempo de leitura aproximado
      let TotaldeSegundos = Number.parseFloat(totalDePalavras) * 2.16;
      if (TotaldeSegundos > 59) {
        TotaldeSegundos = TotaldeSegundos / 60;
        TotaldeSegundos = TotaldeSegundos.toFixed(0);
        TotaldeSegundos = `${TotaldeSegundos} Minutos.`;
      } else {
        TotaldeSegundos = TotaldeSegundos.toFixed(0);
        TotaldeSegundos = `${TotaldeSegundos} Segundos.`;
      }

      return TotaldeSegundos;
    }

    /* calcula o total de caracteres COM espaço*/
    function contarTotalCaracteresEspaco(texto) {
      //contar caracteres (com e sem espaços)
      let contadorCaracteres = texto.length;
      return contadorCaracteres;
    }

    /* calcula o total de caracteres SEM espaço*/
    function contarTotalCaracteres(texto) {
      //contar caracteres (com e sem espaços)
      let texto_sem_espacos = texto.replace(/\s/g, "").length;
      return texto_sem_espacos;
    }

    setTabela(contarPalavrasTabela(textoEntrada));
    setTotalPalavras(contarQuantidadePalavras(textoEntrada));
    setTempoLeitura(contarTempoLeitura(textoEntrada));
    setTotalCaracteresEspaco(contarTotalCaracteresEspaco(textoEntrada))
    setTotalCaracteres(contarTotalCaracteres(textoEntrada))
  }

  return (
    <PageTemplate
      titulo="Contador de Palavras"
      desc="Faz a contagem de caraceres, palavras, e quantas vezes cada palavra foi utilizada. Também calcula o tempo médio de leitura do texto."
    >
      <div className="flex gap-x-16">
        <div className="w-5/12 " id="entrada">
          <span>Insira abaixo o texto:</span>
          <br />
          <textarea
            type="text"
            className="w-10/12 input-primario h-2/6"
            id="contador_texto"
            onChange={(e) => setTextoEntrada(e.target.value)}
          ></textarea>
          <br />
          <br />
          <button
            className="btn-primario contar"
            onClick={() => {
              contarPalavras();
            }}
          >
            Contar
          </button>
        </div>

        <div id="saida" className="font-inter">
          <Tooltip content="Nesta tabela são consideradas apenas palavras com mais de 3 caracteres. Lista limitada a 10 palavras.">
            <h3 className="font-semibold pb-1 inline-block pr-2">
              Palavras mais utilizadas:
            </h3>
            <svg
              className="w-4 h-4 text-gray-600 text-center align-middle dark:text-white inline-block"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11h2v5m-2 0h4m-2.6-8.5h0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </Tooltip>

          <div
            id="tabelaContagem"
            className="relative overflow-x-auto shadow-md sm:rounded-lg "
          >
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs bg-corsecundaria text-white uppercase  ">
                <tr>
                  <th className="px-6 py-3">Palavras</th>
                  <th className="px-6 py-3">Quantidade</th>
                </tr>
              </thead>
              <tbody id="tabela_itens">
                {tabela.map((item, index) => (
                  <tr className="bg-white  hover:bg-gray-50 " key={index}>
                    <th
                      scope="row"
                      className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {item[0]}
                    </th>
                    <td className="px-6 py-2">{item[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <br />
          <br />

          <h3 className="font-semibold">Total de Palavras:</h3>

          <p className="text-sm" id="valorTotalPalavras">
            {totalPalavras} Palavras.
          </p>

          <br />

          <h3 className="font-semibold">Tempo Aproximado de Leitura:</h3>
          <p className="text-sm" id="valorMinutos">
            {tempoLeitura}
          </p>

          <br />

          <h3 className="font-semibold">Total de Caracteres (com espaços):</h3>
          <p className="text-sm" id="valorComEspacos">
            {totalCaracteresEspaco} Caracteres.
          </p>
          <br />
          <h3 className="font-semibold">Total de Caracteres (sem espaços):</h3>
          <p className="text-sm" id="valorSemEspacos">
            {totalCaracteres} Caracteres.
          </p>

          <br />
          <br />

          <br />
          <br />
        </div>
      </div>
    </PageTemplate>
  );
}

export default ContadorDePalavras;
