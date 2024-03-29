import React, { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";

/* botão dos menus customizado em componente */
function ButtonCustom({ desc, link }) {
  return (
    <a
      className="inline-block w-full px-4 py-3 font-medium text-white bg-corprimaria border border-corprimaria rounded active:text-corprimaria hover:bg-transparent hover:text-corprimaria focus:outline-none focus:ring"
      href={link}
    >
      {desc}
    </a>
  );
}

/* Menu Desktop da aplicação */
function SideMenu() {
  return (
    <div className="hidden md:block sticky top-0 left-0 w-1/5 h-screen pt-12 bg-gray-200 border-r-4 border-corprimaria">
      <h4 className="pt-10 pb-1 pl-3 font-bold underline text-corprimaria text-md font-inter ">
        Funções:
      </h4>
      <div className="flex flex-col pl-2 pr-2 space-y-1">
        <ButtonCustom
          desc="Gerar Referências (ABNT)"
          link="/gerar-referencias"
        />
        <ButtonCustom
          desc="Contador de Palavras Repetidas"
          link="/contador-de-palavras"
        />
        <ButtonCustom desc="Normas & Formatações" link="/normas-e-formatacao" />
        <ButtonCustom desc="Downloads" link="/downloads" />
        <ButtonCustom desc="Sobre" link="/sobre" />
      </div>
      {/* card aviso! */}
      <div class="max-w-sm m-6 rounded overflow-hidden shadow-md shadow-corprimaria">
        <div class="px-2 lg:px-6 py-4">
          <div class="font-bold text-md lg:text-xl text-corprimaria mb-2">
            Contribua!
          </div>
          <p class="text-gray-700 text-sm lg:text-base">
            Ajude a melhorar a Toolkit do Pesquisador, contribua com a aplicação
            no GitHub!
          </p>
        </div>
        <div class="pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold underline text-blue-700 mr-2 mb-2">
            <a href="/downloads">Onde achar o repositório do GitHub?</a>
          </span>
        </div>
      </div>
    </div>
  );
}

/* Menu Mobile da aplicação */
function MobileMenu() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex flex-col bg-gradient-to-b from-corprimaria to-corsecundaria text-center w-full md:hidden py-1 border border-corprimaria">
      <Button
        className="m-1 self-center w-6/12 text-xs enabled:hover:bg-gray-200 bg-white text-corprimaria"
        onClick={() => setOpenModal(true)}
      >
        Menu
      </Button>

      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="text-corprimaria">Funções</Modal.Header>
        <Modal.Body className="space-y-2">
          <ButtonCustom
            desc="Gerar Referências (ABNT)"
            link="/gerar-referencias"
          />
          <ButtonCustom
            desc="Contador de Palavras Repetidas"
            link="/contador-de-palavras"
          />
          <ButtonCustom
            desc="Normas & Formatações"
            link="/normas-e-formatacao"
          />
          <ButtonCustom desc="Downloads" link="/downloads" />
          <ButtonCustom desc="Sobre" link="/sobre" />
          {/* card aviso! */}
          <div class="w-full mt-8 m-6 rounded mx-auto overflow-hidden shadow-md border-2 border-corprimaria">
            <div class="px-2 lg:px-6 py-4">
              <div class="font-bold text-md lg:text-xl text-corprimaria mb-2">
                Contribua!
              </div>
              <p class="text-gray-700 text-sm lg:text-base">
                Ajude a melhorar a Toolkit do Pesquisador, contribua com a
                aplicação no GitHub!
              </p>
            </div>
            <div class="pt-4 pb-2">
              <span class="inline-block bg-gray-200 ml-4 rounded-md px-3 py-1 text-sm font-semibold underline text-blue-700 mr-2 mb-2">
                <a href="/downloads">Onde achar o repositório do GitHub?</a>
              </span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="blue" onClick={() => setOpenModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export { SideMenu, MobileMenu };
