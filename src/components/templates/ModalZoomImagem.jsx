import ModalImage from "react-modal-image";
import React, { useState, useEffect } from "react";

function ModalZoomImagem({ caminhoImagem, }) {
  return (
    <div className="">
      <ModalImage className="border-2 w-4/12 rounded-md border-corprimaria" small={caminhoImagem} large={caminhoImagem} />
    </div>
  );
}

export default ModalZoomImagem;
