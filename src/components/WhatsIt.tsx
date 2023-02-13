import * as React from "react";
import { useState } from "react";

export default function WhatsIt(props: any) {
  let [styleCenter, setStyleCenter]: any = useState({
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: `${props.height}${props.id}`,
    padding: "60px",
  });

  return (
    <div>
      <div className="whatsit" style={styleCenter}>
        <div className="center" style={{'color': '#fff'}}>
          <h2 className="title-w">O Que É?</h2>

          <p className="subtitle-w">
            A criptografia de César é um método de criptografia que remonta ao
            século I a.C. e deve seu nome a Júlio César, um general romano que o
            utilizou para proteger suas comunicações militares. O método é
            baseado na substituição de cada letra da mensagem original por outra
            letra deslocada por um número fixo de posições no alfabeto. Por
            exemplo, com uma chave de deslocamento de 3, a letra "A" seria
            substituída por "D", "B" por "E", e assim por diante. O destinatário
            da mensagem poderia, então, deslocar as letras novamente usando a
            mesma chave para ler a mensagem original. Embora o método de César
            tenha sido uma técnica de criptografia eficaz na época, é
            considerado inseguro nos dias de hoje, pois é vulnerável a ataques
            de força bruta e análise de frequência. No entanto, o método de
            César é um exemplo importante da história da criptografia e é
            frequentemente usado como uma introdução ao estudo de técnicas mais
            avançadas de criptografia.
          </p>
        </div>
      </div>
    </div>
  );
}
