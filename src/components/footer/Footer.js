import Logo from "../logo/Logo";
import Lanche from "../assets/lanche.svg"
import style from "./Footer.module.css"
import Menu from "../menu/Menu";

const Footer = ({ nome, provincia }) => {
    return (
        <footer>
            <div className={style.area_nome_nav}>
                <div className={style.nome_min_desc}>
                    <Logo alt={`Logo do ${nome}`} src_log={Lanche} logo={nome} />
                    <p>Sabores autênticos de Moçambique entregues directo à sua porta.</p>
                </div>
                <div className={style.area_atalho_nav}>
                    <div className={style.nav_titulo}>Navegação</div>
                    <Menu mostrar={true} />
                </div>
            </div>
            <hr />
            <span> © 2026 {nome} - {provincia}. Todos os direitos reservados.</span>
        </footer>
    );
}

export default Footer;