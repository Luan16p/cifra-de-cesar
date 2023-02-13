import * as React from "react";

import { GrReactjs } from 'react-icons/gr';
import { FaGitAlt } from 'react-icons/fa';
import { DiNodejsSmall } from 'react-icons/di';
import { SiBootstrap } from 'react-icons/si';

export default function Features(props: any) {

  return (
    <div>
      <div className="cards-feature">

        <div className="card-simple">
          <h2 className="title-card"><GrReactjs className="react"/> ReactJS</h2>

          <p className="subtitle-card">
            Biblioteca JavaScript para a construção de interfaces de usuário
            interativas, reutilizáveis e modulares. Ideal para criar
            aplicações de página única responsivas e eficientes.
          </p>

          <a href="https://pt-br.reactjs.org/" className="saibaMais btnReact">Saiba Mais</a>
        </div>

        <div className="card-simple">
          <h2 className="title-card"><FaGitAlt className="git"/> Git</h2>

          <p className="subtitle-card">
          Sistema de controle de versão distribuído amplamente utilizado para gerenciar projetos de software. Permite acompanhar e controlar as mudanças feitas no código-fonte ao longo do tempo e trabalhar em equipe de maneira mais eficiente.
          </p>

          <a href="https://git-scm.com/" className="saibaMais btnGit">Saiba Mais</a>
        </div>

        <div className="card-simple">
          <h2 className="title-card"><DiNodejsSmall className="node"/> NodeJS</h2>

          <p className="subtitle-card">
          Plataforma de desenvolvimento JavaScript que permite a execução de código do lado do servidor. Permite criar aplicativos escaláveis e de alta performance utilizando uma linguagem já familiar para os desenvolvedores.
          </p>

          <a href="https://nodejs.org/en/" className="saibaMais btnNode">Saiba Mais</a>
        </div>

        <div className="card-simple">
          <h2 className="title-card"><SiBootstrap className="bootstrap"/> Bootstrap</h2>

          <p className="subtitle-card">
            Framework CSS para criar layouts responsivos e estilos para websites de maneira eficiente. Biblioteca de componentes prontos para criar páginas web visualmente atraentes e coerentes. Fácil de aprender e usar.
          </p>

          <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" className="saibaMais btnBootstrap">Saiba Mais</a>
        </div>
      </div>
    </div>
  );
}