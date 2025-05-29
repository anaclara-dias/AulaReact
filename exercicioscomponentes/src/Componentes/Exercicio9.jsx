export default function Exercicio9({valorP, taxa, tempo})
{
    let Montante = Number(valorP) * (1 + (Number(taxa) *  Number(tempo) ));

    return(
        <div>
            Com base no seu valor principal R${valorP} seu juros {taxa} e seu tempo na empresa de {tempo} anos seu montante é R${Montante.toFixed(2)};
        </div>
    );
}