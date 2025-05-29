import Exemplo1   from "./Componentes/Exemplo1"
import Exercicio1 from "./Componentes/Exercicio1"
import Exercicio2 from "./Componentes/Exercicio2"
import Exercicio8 from "./Componentes/Exercicio8"
import Exercicio9 from "./Componentes/Exercicio9"
import Exercicio10 from "./Componentes/Exercicio10"

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

      <hr />
      <h1>Chamada para o Exercício 2</h1>
      <Exercicio2 peso={67} altura={1.65}/>
      <hr />


      <hr />
       <h1>Chamada para o Exercício 8</h1>
       <Exercicio8 peso={150} altura={1.45}/>
       <Exercicio8 peso={82} altura={1.82}/>
      
      <hr />

      <hr />
       <h1>Chamada para o Exercício 9</h1>
       <Exercicio9 valorP={150} taxa = {5} tempo={2}/>
      <hr />

      <hr />
       <h1>Chamada para o Exercício 10</h1>
       <Exercicio10 valorHora={150} horasDia ={2} />
      <hr />

    </div>

  )
}


