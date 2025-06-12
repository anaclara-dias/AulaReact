import "./estilos.css";

export default function Exemplo2()
{
 return (
    <div> 
        <h2 style={{color:"rgb(31, 88, 121)", backgroundColor: "black", textAlign: "center", padding: "10px"}}>
             Exemplo de estilos em linha</h2>

        <p>
           Os estilos são aplicados diretamente nos <span className="exemplo2">elementos do HTML </span> que estão nos componentes do react.
        </p>
    </div>
 )
 
}