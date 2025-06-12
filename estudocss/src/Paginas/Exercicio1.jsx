export default function Exercicio1( {cor} )
{
    const border = {
        color:"rgb(82, 84, 204)",
        textAlign : "Center",
        border: "2px solid " + cor 
    };
    

    return(
    <div>
        <h2 style={border}> Exercicio 1</h2>
        <p>
            Este paragrafo esta na cor <span style={{color : cor}}> </span>
        </p>

    </div>
    );
}