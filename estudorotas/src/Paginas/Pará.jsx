import { Link } from "react-router-dom";

export default function Pará() {
    return(
        <div>
            <h1>Seja Bem-Vido á Pará</h1>

            <p>
                <img src="/PA.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}