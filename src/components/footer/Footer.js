import Logo from "../logo/Logo";
import style from "./Footer.module.css"
import Menu from "../menu/Menu";
import Lanche from "../assets/cakeLogoSF.png"

const Footer = ({ nome, provincia }) => {
    return (
        <footer>
            <div className={style.area_nome_nav}>
                <div className={style.nome_min_desc}>
                    <Logo alt={`Logo do ${nome}`} src_log={Lanche} logo={nome} />
                    <p>Bolos, doces e refeições preparados com dedicação para tornar os seus momentos ainda mais especiais.</p>
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