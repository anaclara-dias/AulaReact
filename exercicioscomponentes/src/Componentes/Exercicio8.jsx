export default function Exercicio2({peso, altura})
{
    let calculo = Number(peso) / (Number(altura) ** 2);

    return(
        <div>
            Com base no seu peso: {peso} kg e altura {altura} m seu IMC é: {calculo.toFixed(2)}
        </div>
    );
}