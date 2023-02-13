import * as React from "react";

import { useState } from "react";

export default function About(props: any) {
  let [styleCenter, setStyleCenter]: any = useState({
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: `${props.height}${props.id}`,
    padding: '60px',
  });

  return (
    <div>
      <div className="about" style={styleCenter}>
        <div className="center">
          <h2 className="title">Sobre Nós</h2>

          <p className="subtitle">
            Nós somos uma equipe apaixonada por criptografia e segurança de
            dados, e estamos comprometidos em proteger suas informações pessoais
            e comerciais. Nosso programa de criptografia usa a cifra de César,
            um método clássico e confiável de criptografia que envolve a
            substituição de cada letra de uma mensagem por outra letra deslocada
            em um número fixo de posições do alfabeto. Com o nosso programa,
            você pode criptografar suas mensagens de forma rápida e fácil,
            mantendo a segurança dos seus dados. Nossa equipe está
            constantemente atualizando e melhorando o nosso programa para
            garantir a melhor experiência de criptografia possível para os
            nossos usuários. Proteja suas informações confidenciais com a nossa
            solução de criptografia confiável e eficaz.
          </p>
        </div>
      </div>
    </div>
  );
}
