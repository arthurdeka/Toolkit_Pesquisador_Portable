import React, { useState, useEffect } from "react";
import PageTemplate from "../templates/PageTemplate";
import CollapseCard from "../templates/CollapseCard";
import LinhaDivisoria from "../templates/LinhaDivisoria";
import ModalZoomImagem from "../templates/ModalZoomImagem";
import { Tooltip } from "flowbite-react";

/* import de imagens */
import ImgAlinhamento from "../../images/normas_img/alinhamento.png";
import ImgCitacoes1 from "../../images/normas_img/citacoes1.png";
import ImgCitacoes2 from "../../images/normas_img/citacoes2.png";
import ImgCitacoes3 from "../../images/normas_img/citacoes3.png";
import ImgEspacamento from "../../images/normas_img/espacamento.png";
import ImgFonte from "../../images/normas_img/fonte.png";

import ImgMargem from "../../images/normas_img/margem.png";
import ImgPaginacao from "../../images/normas_img/paginacao.png";
import ImgPaginacao2 from "../../images/normas_img/paginacao2.png";
import ImgRecuo1 from "../../images/normas_img/recuo1.png";
import ImgRecuo2 from "../../images/normas_img/recuo2.png";
import ImgReferencias1 from "../../images/normas_img/referencias1.png";
import ImgReferencias2 from "../../images/normas_img/referencias2.png";
import ImgReferencias3 from "../../images/normas_img/referencias3.png";

function NormasEFormatacao() {
  return (
    <PageTemplate
      titulo="Normas & Formatação"
      desc="Compilado de normas e regras de formatação necessárias na hora da criação de seu artigo."
    >
      <h6 className="text-center font-inter font-semibold mb-2">
        Como ferramenta de exemplo visual, foi escolhido o Google Docs, por ser
        uma ferramenta de acesso gratuito e de ampla utilização.
      </h6>
      <h6 className="text-center font-inter font-semibold mb-2">
        Clique nas imagens para melhor visualização.
      </h6>

      <CollapseCard
        titulo="Associação Brasileira de Normas Técnicas (ABNT)"
        desc="Formatação de trabalhos acadêmicos de acordo com a Associação Brasileira de Normas Técnicas (ABNT), instruções de formatação, margem, espaçamento, numeração e outros."
      >
        <LinhaDivisoria />

        <h6 className="text-2xl font-semibold">Margem</h6>
        <p className="mb-4">
          3 cm para as margens superior e esquerda e 2 cm para as margens
          inferior e direita.
        </p>
        <ModalZoomImagem caminhoImagem={ImgMargem} />

        <LinhaDivisoria />

        <h6 className="text-2xl font-semibold">Fonte</h6>
        <p className="mb-4">
          Arial ou Times New Roman (tamanho 12) em cor preta.
        </p>
        <ModalZoomImagem caminhoImagem={ImgFonte} />

        <LinhaDivisoria />

        <h6 className="text-2xl font-semibold">Itálico</h6>
        <p className="mb-4">
          Usa-se em palavras e expressões de outros idiomas.
        </p>
        <ModalZoomImagem caminhoImagem={ImgItalico} />

        <LinhaDivisoria />

        <h6 className="text-2xl font-semibold">Espaçamento</h6>
        <p className="mb-4">
          1,5 no texto e 1,0 para citações com mais de três linhas.
        </p>
        <ModalZoomImagem caminhoImagem={ImgEspacamento} />

        <LinhaDivisoria />

        <h6 className="text-2xl font-semibold">Recuo</h6>
        <p className="mb-4">
          Recuo de 1,25cm na primeira linha de cada parágrafo.
        </p>
        <p className="mb-4">
          Atenção: esse recuo somente deve ser aplicado na primeira linha de
          cada parágrafo, para isso, selecione o texto e vá para a seta de recuo.
        </p>
        <ModalZoomImagem caminhoImagem={ImgRecuo1} />
        <br />
        <p className="mb-4">
          Note que a seta se divide em duas partes. Para aplicar o recuo somente
          na primeira linha, deve-se arrastar a metade de cima da seta até a
          marca dos 1,25cm.
        </p>
        <ModalZoomImagem caminhoImagem={ImgRecuo2} />

        <LinhaDivisoria />

        <h6 className="text-2xl font-semibold">Alinhamento do texto</h6>
        <p className="mb-4">
          Aplique o alinhamento do texto como "Justificado".
        </p>
        <ModalZoomImagem caminhoImagem={ImgAlinhamento} />

        <LinhaDivisoria />

        <h6 className="text-2xl font-semibold">Paginação</h6>
        <p className="mb-4">
        A paginação deverá ser incluída na margem superior direita da folha. A capa do trabalho não deverá ser contata e os elementos pré-textuais (folha de rosto, resumo e sumário) não deverão receber paginação.
        </p>
        <ModalZoomImagem caminhoImagem={ImgPaginacao2} />
        <br />
        <p>Instruções Para incluir paginação no Docs:</p>
        <br />
        <ModalZoomImagem caminhoImagem={ImgPaginacao} />

        <LinhaDivisoria />

        <h6 className="text-2xl font-semibold">Citações</h6>
        <p className="mb-4">
        Citação no texto:
        </p>
        <ModalZoomImagem caminhoImagem={ImgCitacoes1} />
        <br />
        <p className="mb-4">
        Citação direta curta (até três linhas):
        </p>
        <ModalZoomImagem caminhoImagem={ImgCitacoes2} />
        <br />
        <p className="mb-4">
        Citação direta longa (mais de três linhas):
        </p>
        <ModalZoomImagem caminhoImagem={ImgCitacoes3} />
        <br />

        <LinhaDivisoria />

        <h6 className="text-2xl font-semibold">Referências bibliográficas</h6>
        <p className="mb-4">
        Para gerar referências bibliográficas de artigos de periódicos nas normas ABNT, você também pode usar a função <a className="font-semibold border-b-2 border-corprimaria text-corprimaria" href="/gerar-referencias">"Gerar Referências"</a> no menu da Toolkit do Pesquisador:
        </p>
        <h5 className="font-semibold text-xl">Pontos de formatação:</h5>
        <p className="mb-4">
        Espaçamento: simples
        </p>
        <p className="mb-4">
        Alinhamento: á esquerda
        </p>
        <p className="mb-4">
        Ordenação: as referências bibliográficas devem estar ordenadas em ordem alfabética
        </p>
        <br /><br />
        <p className="mb-4">
        Como escrever referências bibliográficas para livros:
        </p>
        <ModalZoomImagem caminhoImagem={ImgReferencias1} />
        <br />
        <p className="mb-4">
        Como escrever referências bibliográficas para artigos de periódicos:
        </p>
        <ModalZoomImagem caminhoImagem={ImgReferencias2} />
        <br />
        <p className="mb-4">
        Como escrever referências bibliográficas para teses e dissertações:
        </p>
        <ModalZoomImagem caminhoImagem={ImgReferencias3} />
        <br />

      </CollapseCard>
    </PageTemplate>
  );
}

export default NormasEFormatacao;
