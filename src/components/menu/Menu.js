import { usePagina } from "../context/Context";
import { Link } from "react-router-dom";
import style from "./Menu.module.css";

const Menu = ({ mostrar = false }) => {
    const { paginaAtiva, mudarPagina } = usePagina();
    return (
        <nav>
            <Link to={"/liriocakes/inicio"} className={`${style.links} ${paginaAtiva === "inicio" ? style.estiloActiva : ""}`} onClick={(evt) => {
                mudarPagina("inicio");
            }}>{mostrar && ("> ")}Início</Link>

            <Link to={"/liriocakes/catalogo"} className={`${style.links} ${style.meio} ${paginaAtiva === "catalogo" ? style.estiloActiva : ""}`} onClick={(evt) => {
                mudarPagina("catalogo");
            }}>{mostrar && ("> ")}Catálogo</Link>

            <Link to={"/liriocakes/sobre"} className={`${style.links} ${paginaAtiva === "sobre" ? style.estiloActiva : ""}`} onClick={(evt) => {
                mudarPagina("sobre");
            }}>{mostrar && ("> ")}Sobre Nós</Link>
        </nav>
    );
}

export default Menu;