import React, { useState, useEffect } from "react";
import PageTemplate from "../templates/PageTemplate";
import CollapseCardSobre from "../templates/CollapseCardSobre";
import LinhaDivisoria from "../templates/LinhaDivisoria";
import { Tooltip } from "flowbite-react";

function Sobre() {
  return (
    <PageTemplate
      titulo="Sobre"
      desc="Créditos e mais informações sobre a Toolkit do Pesquisador."
    >
      <div className="flex flex-col w-10/12 items-center mx-auto">
        <h5 className="w-full md:w-6/12 text-center">
          A <b className="text-corprimaria">Toolkit do Pesquisador</b> é um
          programa desenvolvido com o intuito de auxiliar pesquisadores
          iniciantes no processo de criação de artigos científicos. O programa
          foi financiado a partir da Bolsa de Produtividade em Desenvolvimento
          Tecnológico e Extensão Inovadora da CNPq
        </h5>
        <br />
        <h3 className="text-sm ">Contato:</h3>
        <h3 className="text-md font-semibold text-corprimaria">
          arthurdk01@gmail.com
        </h3>
        <br />
        <CollapseCardSobre
          titulo="FlaskWebGui"
          link="https://github.com/ClimenteA/flaskwebgui"
        >
          <p>
            MIT License
            <br />
            <br />
            Copyright (c) 2019 alincmt
            <br />
            <br />
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of this software and associated documentation files
            (the "Software"), to deal in the Software without restriction,
            including without limitation the rights to use, copy, modify, merge,
            publish, distribute, sublicense, and/or sell copies of the Software,
            and to permit persons to whom the Software is furnished to do so,
            subject to the following conditions:
            <br />
            <br />
            The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
            <br />
            <br />
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </CollapseCardSobre>
        <br />
        <CollapseCardSobre
          titulo="DÍCIO.com"
          link="https://www.dicio.com.br/lista-de-palavras/"
        >
          <p>
            Lista de Palavras. In: DICIO, Dicionário Online de Português. Porto:
            7Graus, 2023. Disponível em:
            https://www.dicio.com.br/lista-de-palavras/. Acesso em: 01/08/2023.
          </p>
        </CollapseCardSobre>
        <br />
        <CollapseCardSobre
          titulo="ChatGPT"
          link="https://openai.com/blog/chatgpt"
        >
          <p>
            ChatGPT está disponível sob a licença Creative Commons
            Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
          </p>
        </CollapseCardSobre>
        <br />
        <CollapseCardSobre
          titulo="NLTK - Natural Language Processing Toolkit"
          link="https://www.nltk.org/index.html"
        >
          <p>
            Apache License Version 2.0, January 2004
            http://www.apache.org/licenses/ TERMS AND CONDITIONS FOR USE,
            REPRODUCTION, AND DISTRIBUTION
          </p>
        </CollapseCardSobre>
        <br />
        <CollapseCardSobre titulo="MUI React Components" link="https://mui.com">
          <p>
            The MIT License (MIT)
            <br />
            <br />
            Copyright (c) 2014 Call-Em-All
            <br />
            <br />
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of this software and associated documentation files
            (the "Software"), to deal in the Software without restriction,
            including without limitation the rights to use, copy, modify, merge,
            publish, distribute, sublicense, and/or sell copies of the Software,
            and to permit persons to whom the Software is furnished to do so,
            subject to the following conditions:
            <br />
            <br />
            The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
            <br />
            <br />
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </CollapseCardSobre>
        <br />
        <CollapseCardSobre
          titulo="Flowbite REACT"
          link="https://www.flowbite-react.com"
        >
          <p>
            The released code is licensed under the MIT license.
            <br />
            <br />
            Copyright (c) Themesberg (Bergside Inc.)
            <br />
            <br />
            Permission is hereby granted, free of charge, to any person
            obtaining a copy of this software and associated documentation files
            (the “Software”), to deal in the Software without restriction,
            including without limitation the rights to use, copy, modify, merge,
            publish, distribute, sublicense, and/or sell copies of the Software,
            and to permit persons to whom the Software is furnished to do so,
            subject to the following conditions:
            <br />
            <br />
            The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
            <br />
            <br />
            THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </CollapseCardSobre>
        <br />
        <CollapseCardSobre
          titulo="react-modal-image"
          link="https://www.npmjs.com/package/react-modal-image"
        >
          <p>
            MIT License Copyright (c) 2018 Ari Autio Permission is hereby
            granted, free of charge, to any person obtaining a copy of this
            software and associated documentation files (the "Software"), to
            deal in the Software without restriction, including without
            limitation the rights to use, copy, modify, merge, publish,
            distribute, sublicense, and/or sell copies of the Software, and to
            permit persons to whom the Software is furnished to do so, subject
            to the following conditions: The above copyright notice and this
            permission notice shall be included in all copies or substantial
            portions of the Software.
            <br />
            <br />
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
            ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
            CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.
          </p>
        </CollapseCardSobre>
        <br />
      </div>
    </PageTemplate>
  );
}

export default Sobre;
