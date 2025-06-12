import Exemplo1 from "./Paginas/Exemplo1";
import Exemplo2 from "./Paginas/Exemplo2";
import Exemplo3 from "./Paginas/Exemplo3";
import Exercicio1 from "./Paginas/Exercicio1";
import Exercicio2 from "./Paginas/Exercicio2";

export default function App(){
  return(
    <div>
      <h1> Aula 02- Estilos CSS no react</h1>

    <Exemplo1 />

    <hr />
    
    <Exemplo2/>

    <hr/>

    <Exemplo3 />

    <hr/>

    <Exercicio1 cor="aquamarine"/>
    <Exercicio1 cor="rgb(96,0,0)"/>

    <hr/>

    <Exercicio2 />
    </div>

  );

}
