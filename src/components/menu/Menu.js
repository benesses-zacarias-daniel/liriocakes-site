import { Link } from "react-router-dom";
import style from "./Menu.module.css";
import { usePagina } from "../context/Context";

const Menu = ({ mostrar = false }) => {
    const { paginaAtiva, mudarPagina } = usePagina();
    return (
        <nav>
            <Link to={"/mozfood/home"} className={`${style.links} ${paginaAtiva === "home" ? style.estiloActiva : ""}`} onClick={(evt) => {
                mudarPagina("home");
            }}>{mostrar && ("> ")}Início</Link>

            <Link to={"/mozfood/menu"} className={`${style.links} ${paginaAtiva === "menu" ? style.estiloActiva : ""}`} onClick={(evt) => {
                mudarPagina("menu");
            }}>{mostrar && ("> ")}Menu</Link>

            <Link to={"/mozfood/sobre"} className={`${style.links} ${paginaAtiva === "sobre" ? style.estiloActiva : ""}`} onClick={(evt) => {
                mudarPagina("sobre");
            }}>{mostrar && ("> ")}Sobre Nós</Link>
        </nav>
    );
}

export default Menu;