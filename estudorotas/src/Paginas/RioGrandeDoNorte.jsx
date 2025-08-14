import { Link } from "react-router-dom";

export default function RioGrandeDoNorte() {
    return(
        <div>
            <h1>Seja Bem-Vido á Rio Grande do Norte</h1>

            <p>
                <img src="/RN.png" width={500} />
            </p>

            <p>
                <Link to = "/">Voltar</Link> 
            </p>
        </div>
    )
}