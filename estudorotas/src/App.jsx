import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Paginas/Home"
import Acre from "./Paginas/Acre"
import Alagoas from "./Paginas/Alagoas"
import Amapa from "./Paginas/Amapa"
import Amazonas from "./Paginas/Amazonas"
import Bahia from "./Paginas/Bahia"
import Ceara from "./Paginas/Ceara"
import DistritoFederal from "./Paginas/DistritoFederal"
import EspiritoSanto from "./Paginas/EspiritoSanto"
import Goias from "./Paginas/Goias"
import Maranhao from "./Paginas/Maranhao"
import MatoGrosso from "./Paginas/MatoGrosso"
import MatoGrossoDoSul from "./Paginas/MatoGrossoDoSul"
import MinasGerais from "./Paginas/MinasGerais"
import Pará from "./Paginas/Pará"
import Paraíba from "./Paginas/Paraíba"
import Parana from "./Paginas/Parana"
import Pernambuco from "./Paginas/Pernambuco"
import Piauí from "./Paginas/Piauí"
import RioGrandeDoNorte from "./Paginas/RioGrandeDoNorte"
import RioGrandeSul from "./Paginas/RioGrandeSul"
import RioJaneiro from "./Paginas/RioJaneiro"
import Rondônia from "./Paginas/Rondônia"
import Roraima from "./Paginas/Roraima"
import SantaCatarina from "./Paginas/SantaCatarina"
import SaoPaulo from "./Paginas/SaoPaulo"
import Sergipe from "./Paginas/Sergipe"
import Tocantins from "./Paginas/Tocantins"



export default function App()
{
    return (
        <div>
            <BrowserRouter>
             <Routes>

                 
                <Route path="/" element = {<Home />} />
                <Route path="/AC" element = {<Acre />} />
                <Route path="/AL" element = {<Alagoas />} />
                <Route path="/AP" element = {<Amapa />} />
                <Route path="/AM" element = {<Amazonas />} />
                <Route path="/BA" element = {<Bahia />} />
                <Route path="/CE" element = {<Ceara />} />
                <Route path="/DF" element = {<DistritoFederal />} />
                <Route path="/GO" element = {<Goias />} />
                <Route path="/MA" element = {< Maranhao/>} />
                <Route path="/MT" element = {<MatoGrosso />} />
                <Route path="/MS" element = {<MatoGrossoDoSul />} />
                <Route path="/MG" element = {<MinasGerais />} />
                <Route path="/PA" element = {<Pará />} />
                <Route path="/PB" element = {<Paraíba />} />
                <Route path="/PE" element = {<Pernambuco />} />
                <Route path="/PI" element = {<Piauí />} />
                <Route path="/RJ" element = {<RioJaneiro />} />
                <Route path="/RN" element = {<RioGrandeDoNorte />} />
                <Route path="/RO" element = {<Rondônia />} />
                <Route path="/SP" element = {<SaoPaulo />} />
                <Route path="/PR" element = {<Parana />} />
                <Route path="/RR" element = {<Roraima />} />
                <Route path="/ES" element = {<EspiritoSanto />} />
                <Route path="/RS" element = {<RioGrandeSul />} />
                <Route path="/SC" element = {<SantaCatarina />} />
                <Route path="/SE" element = {<Sergipe />} />
                <Route path="/TO" element = {<Tocantins />} />


             </Routes>
            </BrowserRouter>
            
        </div>
    );
}