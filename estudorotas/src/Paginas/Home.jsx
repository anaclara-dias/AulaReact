import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Estudos de Rotas no React</h1>

            <ul>
                <li><Link to = "/AC" >Acre</Link></li>
                <li><Link to = "/AL" >Alagoas</Link></li>
                <li><Link to = "/AP" >Amapá</Link></li>
                <li><Link to = "/SP" >Amazonas</Link></li>
                <li><Link to = "/SP" >Bahia</Link></li>
                <li><Link to = "/SP" >Ceara</Link></li>
                <li><Link to = "/SP" >Distrito Federal</Link></li>
                <li><Link to = "/ES" >Espírito Santo</Link></li>
                <li><Link to = "/SP" >Goiás</Link></li>
                <li><Link to = "/SP" >Maranhão</Link></li>
                <li><Link to = "/SP" >Mato Grosso</Link></li>
                <li><Link to = "/SP" >Mato Grosso Do Sul</Link></li>
                <li><Link to = "/MG" >Minas Gerais</Link></li>
                <li><Link to = "/SP" >São Paulo</Link></li>
                <li><Link to = "/RJ" >Rio de Janeiro</Link></li>
                <li><Link to = "/SC" >Santa Catarina</Link></li>
                <li><Link to = "/MG" >Minas Gerais</Link></li>
                <li><Link to = "/PR" >Paraná</Link></li>
                
                <li><Link to = "/RS" >Rio Grande do Sul</Link></li>
            </ul>
        </div>
    )
}