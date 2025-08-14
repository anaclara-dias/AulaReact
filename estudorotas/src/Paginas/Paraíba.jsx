import { Link } from "react-router-dom";

export default function Paraíba() {
    return(
        <div>
            <h1>Seja Bem-Vido á Paraíba</h1>

            <p>
                <img src="/PB.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}