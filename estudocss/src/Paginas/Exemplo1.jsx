import "./estilos.css";

export default function Exemplo1()
{
 return (
    <div> 
        <h2 className="titulo"> Exemplo CSS Puro</h2>

        <p className="destaque">
            Pode-se aplicar através de <span className="dest"> folhas de estilo </span>, crie-se um arquivo separado
            com a extensão css, e depois importa-o no arquivo react com a extensão jsx.
        </p>
    </div>
 )
}