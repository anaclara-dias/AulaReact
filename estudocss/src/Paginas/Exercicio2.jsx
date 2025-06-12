export default function Exercicio2(nota1, nota2)
{
    let soma = (Number(nota1) + Number(nota2)) / 2;

    const titulo = {
        color:"yellow",
        textAlign : "Center",
        border: "2px solid " 
    };

    const aprovado = {
       color:"blue"
    };

    const reprovado = {
    color:"red"
    };

    if (soma >= 6)
    {
        return(
            <div>
                <h2 style={titulo}> Exercicio 2 - Cálculo de Média</h2>
    
                <p>
                    O componente Exercicio2 recebe dois parametros referente a nota1 e nota2, calcule a media 
                    aritmética e verifica se o aluno está <span className="aprovado"> aprovado </span> ou
                     <span className="reprovado"> reprovado </span> para estar aprovado é necessario média 6 ou superior.
                    Note que este paragrafo está justificado.
    
                    nota1:{nota1}
                    nota2:{nota2}
                    média:{soma.toFixed(2)}


                </p>
        
            </div>
            );
    }
    else
    {
        return(
            <div>
                <h2 style={titulo}> Exercicio 2 - Cálculo de Média</h2>
    
                <p>
                    O componente Exercicio2 recebe dois parametros referente a nota1 e nota2, calcule a media 
                    aritmética e verifica se o aluno está <span className="aprovado"> aprovado </span> ou
                     <span className="reprovado"> reprovado </span> para estar aprovado é necessario média 6 ou superior.
                    Note que este paragrafo está justificado.
    
                    nota1:{nota1}
                    nota2:{nota2}
                    média:{soma.toFixed(2)}
                </p>
        
            </div>
            );
    }
}