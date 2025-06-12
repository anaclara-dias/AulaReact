import "./estilos.css";

export default function Exemplo3()
{
const titulo = {
    color : "red",
    backgroundColor : "black",
    textAlign : "Center",
    padding : "10px"
};

    return (
        <div>
          <h2 style ={titulo}> Exemplo de Estilos em Objeto</h2>

          <p> Este foi um exemplo de estilo em linha mas utilizando 
            uma variável objeto para armazenar estilos</p>
        </div>
    );
}