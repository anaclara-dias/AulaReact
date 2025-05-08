export default function Exercicio1({fah})
{
    let calculo = (Number(fah) - 32) * 5 / 9;

    return(
        <div>
            A conversao da sua temperatura: {fah} para Celsius {calculo}
        </div>
    );
}