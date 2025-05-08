export default function Exercicio2({peso, altura})
{
    let calculo = Number(peso) / (Number(altura) * 2);

    return(
        <div>
            Com base no seu peso: {peso} seu IMC é: {calculo}
        </div>
    );
}