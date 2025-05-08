import Exemplo1   from "./Componentes/Exemplo1"
import Exercicio1 from "./Componentes/Exercicio1"
import Exercicio2 from "./Componentes/Exercicio2"

export default function App()
{
  return(
    <div>
      <h1> Exercicios de Componentes</h1>
       
       <h3>Chamada para o Exemplo1</h3>
       <Exemplo1 numero1={8} numero2={2} />
       <Exemplo1 numero1={10} numero2={96} />
       <Exemplo1 numero1={80} numero2={74} />
       <Exemplo1 numero1={897} numero2={10} />
       <Exemplo1 numero1={348} numero2={0} />

       <hr />
       <h1>Chamada para o Exercício 1</h1>
       <Exercicio1 fah={100} />
      
      <hr />
      <h1>Chamada para o Exercício 2</h1>
      <Exercicio2 peso={67} altura={1.65}/>
    </div>
  )
}


