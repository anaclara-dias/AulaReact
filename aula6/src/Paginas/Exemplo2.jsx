import{Link} from "react-router-dom";
import{useState} from "react";

export default function Exemplo2()
{
  const [n1, setIdade1]= useState("ana");
  const [n2, setIdade2]=useState(18);
  const [resultado, setResultado] = useState(null);

  return (
    <div>
      
      <h1> Exemplo 2</h1>
          <div className = "container">
            <form>

          <p>
             Digite o número 1: <br/> 
            <input type="text" value={n1} onChange={ (e) => setIdade1(e.target.value)} />
          </p>

          <p>
            Digite o número 2: <br/> 
            <input type="number" value={n2} onChange={ (e) => setIdade2(e.target.value)}/>
          </p>

          <p>
           <input type="button" value= "Exemplo 2" onClick={calcular}/>
          </p>

          <p>
            <b> Resultado</b> <br />
                Nome:  {nome} <br />
                Idade: {idade}
          </p>

          <p>
            {resultado}
          </p>

     </form>

     </div>

    </div>
  )
}