import React, { useState, useEffect } from "react";
import PageTemplate from "../templates/PageTemplate";
import { Tooltip } from "flowbite-react";
import { capitalizarPalavras } from "./../../utils/capitalizarPalavras";
import { formatarData } from "./../../utils/formatarData";
import { Label, Radio } from "flowbite-react";
import DOMPurify from "dompurify";

function GerarReferencias() {
  /* lista para guardar as referências previamente geradas */
  const [lista, setLista] = useState([]);

  /* valores dos inputs individualmente */
  const [autor1, setAutor1] = useState(null);
  const [autor1Sobrenome, setAutor1Sobrenome] = useState(null);
  const [autor2, setAutor2] = useState(null);
  const [autor2Sobrenome, setAutor2Sobrenome] = useState(null);
  const [autor3, setAutor3] = useState(null);
  const [autor3Sobrenome, setAutor3Sobrenome] = useState(null);

  const [tituloArtigo, setTituloArtigo] = useState(null);
  const [tituloRevista, setTituloRevista] = useState(null);

  const [dataMesAno, setDataMesAno] = useState(null);
  const [dataAno, setDataAno] = useState(null);

  const [volumeExemplar, setVolumeExemplar] = useState(null);
  const [numeroExemplar, setNumeroExemplar] = useState(null);
  const [paginasInicialFinal, setPaginasInicialFinal] = useState(null);

  const [cidadePublicacao, setCidadePublicacao] = useState(null);

  const [acessoDOI, setAcessoDOI] = useState(null);
  const [acessoOnline, setAcessoOnline] = useState(null);
  const [diaAcessoOnline, setDiaAcessoOnline] = useState(null);

  /* valores de campos de escolha */
  const [autorSelecionado, setAutorSelecionado] = useState(null);
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [adicionarCidade, setAdicionarCidade] = useState(false);
  const [tipoAcesso, setTipoAcesso] = useState(null);

  const gerarReferencia = () => {
    function processamentoDosAutores() {
      /* Organização dos nomes */
      /* toUpperCase para fazer os sobrenomes maiúsculos */
      /* capitalizarPalavras() para fazer a primeira letra de todas as palavras como maiúscula */
      if (autorSelecionado === "autor-1") {
        return `${autor1Sobrenome.toUpperCase()}, ${capitalizarPalavras(autor1)}`;
      } else if (autorSelecionado === "autor-2") {
        return `${autor1Sobrenome.toUpperCase()}, ${capitalizarPalavras(autor1)}; ${autor2Sobrenome.toUpperCase()}, ${capitalizarPalavras(autor2)}`;
      } else if (autorSelecionado === "autor-3") {
        return `${autor1Sobrenome.toUpperCase()}, ${capitalizarPalavras(autor1)}; ${autor2Sobrenome.toUpperCase()}, ${capitalizarPalavras(autor2)}; ${autor3Sobrenome.toUpperCase()}, ${capitalizarPalavras(autor3)}`;
      } else if (autorSelecionado === "autor-mais") {
        return `${autor1Sobrenome.toUpperCase()}, ${capitalizarPalavras(autor1)} <i>et al</i>`;
      }
    }

    function processamentoDataPublicacao() {
      /* formata a data do input para o formato ABNT correto */
      if (dataSelecionada === "mes-ano") {
        return formatarData(dataMesAno, dataSelecionada);
      } else if (dataSelecionada === "ano") {
        return `${dataAno}.`;
      }
    }

    function processamentoCidadeAcesso() {
      if (adicionarCidade === true) {
        return `${cidadePublicacao}, `;
      } else {
        return "";
      }
    }

    function processamentoTipoAcesso() {
      if (tipoAcesso === "doi") {
        return `DOI: ${acessoDOI}.`;
      } else if (tipoAcesso === "acesso-online") {
        /* formata a data do input para o formato ABNT de DIA DE ACESSO (não é a mesma coisa da data de publicação) */
        let dataFormatada = formatarData(diaAcessoOnline, "dia-mes-ano");
        /* Junta as informações na sessão de tipo de acesso */
        return `Disponível em: ${acessoOnline.toLowerCase()}. Acesso em: ${dataFormatada}`;
      }
    }

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Adiciona um efeito de rolagem suave
      });
    }

    let resultadoNomesFinal = processamentoDosAutores();
    let dataPublicacaoFinal = processamentoDataPublicacao();
    let cidadeFinal = processamentoCidadeAcesso();
    let tipoAcessoFinal = processamentoTipoAcesso();
    scrollToTop()

    let resultadoFinal = `${resultadoNomesFinal}. ${tituloArtigo}. <b>${tituloRevista}</b>, ${cidadeFinal}v. ${volumeExemplar}, n. ${numeroExemplar}, p. ${paginasInicialFinal}, ${dataPublicacaoFinal} ${tipoAcessoFinal}`;
    setLista([...lista, resultadoFinal]);

    console.log(lista);

    return resultadoFinal;
  };

  const mudancaEscolhaCidade = () => {
    setAdicionarCidade(!adicionarCidade);
  };

  return (
    <PageTemplate
      titulo="Gerador de Referências"
      desc="Preencha os dados para gerar uma referência nas normas da Associação Brasileira de Normas Técnicas sobre determinada obra."
    >
      <div className="flex gap-x-16 font-inter">
        {/* entrada */}
        <div className="w-6/12 ">
          <div className="p-4 text-white rounded-md font-inter bg-gradient-to-r from-corsecundaria to-corprimaria">
            <h5 className="inline-block pb-3 pr-2 font-semibold text-md">
              Quantidade de autores:
            </h5>

            {/* radiobuttons dos autores */}
            <fieldset className="flex flex-wrap w-full gap-4 text-white">
              <div className="flex items-center gap-2 cursor-pointer">
                <Radio
                  className="cursor-pointer text-corterciaria border-none"
                  id="autor-1"
                  name="countries"
                  value="autor-1"
                  onChange={() => setAutorSelecionado("autor-1")}
                />
                <Label className="text-white cursor-pointer" htmlFor="autor-1">
                  Somente um autor
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio
                  className="cursor-pointer text-corterciaria"
                  id="autor-2"
                  name="countries"
                  value="autor-2"
                  onChange={() => setAutorSelecionado("autor-2")}
                />
                <Label className="text-white cursor-pointer" htmlFor="autor-2">
                  Dois autores
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio
                  className="cursor-pointer text-corterciaria"
                  id="autor-3"
                  name="countries"
                  value="autor-3"
                  onChange={() => setAutorSelecionado("autor-3")}
                />
                <Label className="text-white cursor-pointer" htmlFor="autor-3">
                  Três autores
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio
                  className="cursor-pointer text-corterciaria"
                  id="autor-mais"
                  name="countries"
                  value="autor-mais"
                  onChange={() => setAutorSelecionado("autor-mais")}
                />
                <Label
                  className="text-white cursor-pointer"
                  htmlFor="autor-mais"
                >
                  Mais de três autores
                </Label>
              </div>
            </fieldset>
          </div>

          {/* input dos autores */}
          <div
            id="campos-autores"
            className="p-4 mt-1 text-sm text-white bg-gradient-to-r from-corsecundaria to-corprimaria rounded-b-md"
          >
            {["autor-1", "autor-2", "autor-3"].includes(autorSelecionado) && (
              <div id="opcao-autor-1" className="pb-4">
                {/* Conteúdo para autor-1 */}
                <div className="inline-block pr-8">
                  {autorSelecionado === "autor-1" && (
                    <div>
                      <label>Nome do autor:</label> <br />
                    </div>
                  )}
                  {["autor-2", "autor-3", "autor-mais"].includes(
                    autorSelecionado
                  ) && (
                    <div>
                      <label>Nome do primeiro autor:</label> <br />
                    </div>
                  )}
                  <input
                    className="input-primario"
                    id="nome_autor_1"
                    type="text"
                    onChange={(e) => setAutor1(e.target.value)}
                  />
                </div>

                <div className="inline-block">
                  {autorSelecionado === "autor-1" && (
                    <div>
                      <label>Último nome do autor:</label> <br />
                    </div>
                  )}
                  {["autor-2", "autor-3", "autor-mais"].includes(
                    autorSelecionado
                  ) && (
                    <div>
                      <label>Último nome do primeiro autor:</label> <br />
                    </div>
                  )}
                  <input
                    className="input-primario"
                    id="sobrenome_autor_1"
                    type="text"
                    onChange={(e) => setAutor1Sobrenome(e.target.value)}
                  />
                </div>
              </div>
            )}

            {["autor-2", "autor-3"].includes(autorSelecionado) && (
              <div id="opcao-autor-2" className="pb-4">
                {/* Conteúdo para autor-2 */}
                <div className="inline-block pr-8">
                  <label>Nome do segundo autor:</label> <br />
                  <input
                    className="input-primario"
                    id="nome_autor_2"
                    type="text"
                    onChange={(e) => setAutor2(e.target.value)}
                  />
                </div>

                <div className="inline-block">
                  <label>Último nome do segundo autor:</label> <br />
                  <input
                    className="input-primario"
                    id="sobrenome_autor_2"
                    type="text"
                    onChange={(e) => setAutor2Sobrenome(e.target.value)}
                  />
                </div>
              </div>
            )}

            {["autor-3"].includes(autorSelecionado) && (
              <div id="opcao-autor-3" className="pb-4">
                {/* Conteúdo para autor-3 */}
                <div className="inline-block pr-8">
                  <label>Nome do terceiro autor:</label> <br />
                  <input
                    className="input-primario"
                    id="nome_autor_3"
                    type="text"
                    onChange={(e) => setAutor3(e.target.value)}
                  />
                </div>

                <div className="inline-block">
                  <label>Último nome do terceiro autor:</label> <br />
                  <input
                    className="input-primario"
                    id="sobrenome_autor_3"
                    type="text"
                    onChange={(e) => setAutor3Sobrenome(e.target.value)}
                  />
                </div>
              </div>
            )}

            {["autor-mais"].includes(autorSelecionado) && (
              <div id="opcao-autor-mais" className="pb-4">
                {/* Conteúdo para autor-mais */}
                <div className="inline-block pr-8">
                  <label>Nome do primeiro autor:</label> <br />
                  <input
                    className="input-primario"
                    id="nome_autor_etal"
                    type="text"
                    onChange={(e) => setAutor1(e.target.value)}
                  />
                </div>

                <div className="inline-block">
                  <label>Último nome do primeiro autor:</label> <br />
                  <input
                    className="input-primario"
                    id="sobrenome_autor_etal"
                    type="text"
                    onChange={(e) => setAutor1Sobrenome(e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* inputs restantes */}
          <div id="outros-inputs" className="mt-4">
            <label>Título do artigo:</label> <br />
            <input
              className="input-primario"
              id="titulo_artigo"
              type="text"
              onChange={(e) => setTituloArtigo(e.target.value)}
            />
            <br />
            <label>Título da revista:</label> <br />
            <input
              className="input-primario"
              id="titulo_revista"
              type="text"
              onChange={(e) => setTituloRevista(e.target.value)}
            />
            <br /> <br />
            {/* Data de publicação */}
            <div className="p-4 text-white rounded-md font-inter bg-gradient-to-r from-corsecundaria to-corprimaria">
              <Tooltip content="Algumas revistas fornecem somente o ano de publicação do artigo, já outras fornecem o mês e ano. Marque a opção que se encaixar em seu caso.">
                <h5 className="inline-block pb-3 pr-2 font-semibold text-md">
                  Data de publicação, formato da data:
                </h5>
                <svg
                  className="w-4 h-4 text-white text-center align-middle dark:text-white inline-block"
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

              {/* radiobuttons da data de pub */}
              <fieldset className="flex flex-wrap w-full gap-4 text-white">
                <div className="flex items-center gap-2 cursor-pointer">
                  <Radio
                    className="cursor-pointer text-corterciaria border-none"
                    id="mes-ano"
                    name="data-de-publicacao"
                    value="mes-ano"
                    onChange={(e) => {
                      setDataSelecionada("mes-ano");
                    }}
                  />
                  <Label
                    className="text-white cursor-pointer"
                    htmlFor="mes-ano"
                  >
                    Mês e Ano
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    className="cursor-pointer text-corterciaria"
                    id="ano"
                    name="data-de-publicacao"
                    value="ano"
                    onChange={(e) => {
                      setDataSelecionada("ano");
                    }}
                  />
                  <Label className="text-white cursor-pointer" htmlFor="ano">
                    Somente Ano
                  </Label>
                </div>
              </fieldset>
            </div>
            {/* inputs da data de pub*/}
            <div className="p-4 mt-1 text-sm text-white bg-gradient-to-r from-corsecundaria to-corprimaria rounded-b-md">
              {dataSelecionada && (
                <div>
                  <label htmlFor="Data_MesAno">Data:</label> <br />
                  {["mes-ano"].includes(dataSelecionada) && (
                    <div>
                      <input
                        className="input-primario"
                        type="month"
                        onChange={(e) => {
                          setDataMesAno(e.target.value);
                        }}
                      />
                      <br />
                    </div>
                  )}
                  {["ano"].includes(dataSelecionada) && (
                    <div>
                      <input
                        placeholder="2023"
                        className="input-primario"
                        type="number"
                        onChange={(e) => {
                          setDataAno(e.target.value);
                        }}
                      />
                      <br />
                    </div>
                  )}
                </div>
              )}
            </div>
            <br />
            <label>Volume do exemplar:</label> <br />
            <input
              className="input-primario"
              type="number"
              onChange={(e) => {
                setVolumeExemplar(e.target.value);
              }}
            />
            <br />
            <label>Número do exemplar:</label> <br />
            <input
              className="input-primario"
              type="number"
              onChange={(e) => {
                setNumeroExemplar(e.target.value);
              }}
            />
            <br />
            <label>Páginas inicial-final:</label> <br />
            <input
              className="input-primario"
              type="text"
              onChange={(e) => {
                setPaginasInicialFinal(e.target.value);
              }}
            />
            <br /> <br />
            {/* Adicionar cidade */}
            <div className="p-4 text-white rounded-md font-inter bg-gradient-to-r from-corsecundaria to-corprimaria">
              {/* checkbox */}
              <fieldset className="flex flex-wrap w-full gap-4 text-white">
                <div className="flex items-center gap-2 cursor-pointer">
                  <div class="flex items-center">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      onChange={() => mudancaEscolhaCidade()}
                      class="w-4 h-4 text-corterciaria border-white m-2 border-2 bg-gray-100  rounded   "
                    />

                    <Tooltip content="Algumas revistas não disponibilizam a cidade de publicação. Caso seja seu caso, deixe essa opção desmarcada">
                      <label
                        htmlFor="default-checkbox"
                        class="ms-2 text-sm font-medium text-white"
                      >
                        Adicionar cidade de publicação da revista
                      </label>
                      <svg
                        className="w-4 h-4 text-white text-center align-middle ml-2 inline-block"
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
                  </div>
                </div>
              </fieldset>
            </div>
            {/* inputs de Adicionar cidade*/}
            <div className="p-4 mt-1 text-sm text-white bg-gradient-to-r from-corsecundaria to-corprimaria rounded-b-md">
              {adicionarCidade && (
                <div>
                  <label>Cidade:</label> <br />
                  <input
                    className="input-primario"
                    type="text"
                    onChange={(e) => {
                      setCidadePublicacao(e.target.value);
                    }}
                  />
                </div>
              )}
            </div>
            <br />
            {/* Tipo de acesso */}
            <div className="p-4 text-white rounded-md font-inter bg-gradient-to-r from-corsecundaria to-corprimaria">
              <Tooltip content='Selecione aqui por qual maneira você teve acesso ao artigo. Caso tenha sido online, no campo "Acesso em" coloque o dia que você acessou o artigo.'>
                <h5 className="inline-block pb-3 pr-2 font-semibold text-md">
                  Tipo de acesso:
                </h5>
                <svg
                  className="w-4 h-4 text-white text-center align-middle dark:text-white inline-block"
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
              {/* radiobuttons de Tipo de acesso */}
              <fieldset className="flex flex-wrap w-full gap-4 text-white">
                <div className="flex items-center gap-2 cursor-pointer">
                  <Radio
                    className="cursor-pointer text-corterciaria border-none"
                    name="tipo-acesso"
                    onChange={() => setTipoAcesso("doi")}
                  />
                  <Label className="text-white cursor-pointer">
                    DOI do Artigo
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    className="cursor-pointer text-corterciaria"
                    name="tipo-acesso"
                    onChange={() => setTipoAcesso("acesso-online")}
                  />
                  <Label className="text-white cursor-pointer">
                    Acesso Online
                  </Label>
                </div>
              </fieldset>
            </div>
            {/* inputs de Tipo de acesso*/}
            <div className="p-4 mt-1 text-sm text-white bg-gradient-to-r from-corsecundaria to-corprimaria rounded-b-md">
              {["doi"].includes(tipoAcesso) && (
                <div>
                  <label>DOI do artigo:</label> <br />
                  <input
                    className="input-primario"
                    type="text"
                    onChange={(e) => {
                      setAcessoDOI(e.target.value);
                    }}
                  />
                </div>
              )}

              {["acesso-online"].includes(tipoAcesso) && (
                <div>
                  <label>Link de acesso do artigo:</label> <br />
                  <input
                    className="input-primario"
                    type="text"
                    onChange={(e) => {
                      setAcessoOnline(e.target.value);
                    }}
                  />
                  <br />
                  <label>Acesso em:</label> <br />
                  <input
                    className="input-primario"
                    type="date"
                    onChange={(e) => {
                      setDiaAcessoOnline(e.target.value);
                    }}
                  />
                </div>
              )}
            </div>
            <br />
            <button
              className="btn-primario"
              onClick={() => {
                gerarReferencia();
              }}
            >
              Gerar Referência
            </button>
            <br />
            <br />
            <br />
          </div>
        </div>

        {/* saída */}
        <div className="w-6/12">

          <Tooltip content='Nomes da revista de publicação aparecerão em negrito, campos não preenchidos aparecerão como "undefined" ou "null"'>
          <h2 className="text-2xl text-center font-semibold font-inter inline-block mb-2 ml-4">
            Gerações:
          </h2>
                <svg
                  className="w-4 h-4 text-gray-600 align-middle text-center  ml-2 inline-block"
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
          <div className="rounded-md border-2 border-corprimaria border-opacity-45 p-4 flex flex-col-reverse">
            <p className="font-inter text-sm mb-3">
              SOUSA, Árlen. <i>et al</i>. Qualidade de vida e incapacidade funcional
              entre idosos cadastrados na estratégia de saúde da família. <b>ABCS
              Health Sciences</b>, v. 43, n. 1, p. 9, mai. 2018. DOI:
              10.7322/abcshs.v43i1.986.
            </p>
              
            <p className="font-inter text-sm mb-3">
              RODRIGUES, Arthur. DESENVOLVIMENTO DE PROGRAMA DE COMPUTADOR PARA
              AUXILIAR PESQUISADORES INICIANTES NA PRODUÇÃO ACADÊMICA. <b>I
              Congresso Internacional de Educação e Inovação</b>, Montes Claros, MG,
              v. 1, n. 1, p. 2-3, 2023. Disponível em:
              https://congresso2023.unimontes.br/anais/391b6341-3b7a-4622-a377-ab88e5380f67.
              Acesso em: 26 fev. 2024.
            </p>

            {lista.map((item, index) => (
              <p
                key={index}
                className="font-inter text-sm mb-3"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }}
              />
            ))}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default GerarReferencias;
