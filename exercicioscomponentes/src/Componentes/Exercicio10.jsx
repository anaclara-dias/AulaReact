export default function Exercicio10({valorHora, horasDia})
{
    let salario = Number(valorHora) * Number(horasDia) * 30;

    return(
        <div>
            Com base no seu valor por horas R${valorHora} e sua quantidade de horas trabalhadas R${horasDia} seu salario mensal é de R${salario.toFixed(2)};
        </div>
    );
}