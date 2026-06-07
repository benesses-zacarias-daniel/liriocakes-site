import Logo from "../logo/Logo";
import style from "./Footer.module.css";
import Menu from "../menu/Menu";
import Lanche from "../assets/cakeLogoSF.png";
import WhatsApp from "../assets/wht.svg";
import Facebook from "../assets/facebook.svg";
import Img from "../img/Img";


const Footer = ({ nome, provincia, numeros, desc }) => {
    const numero = "258866204359";
    const mens = "Olá! Gostaria de fazer uma encomenda na Lírio Cake's.";
    const linkWhatsApp = `https://wa.me/${numero}?text=${mens}`
    return (
        <footer>
            <div className={style.area_nome_nav}>
                <div className={style.nome_min_desc}>
                    <Logo alt={`Logo do ${nome}`} src_log={Lanche} logo={nome} />
                    <p>{desc}</p>
                    <div className={style.area_contacto}>
                        Contactos:
                        <div className={style.contacto}>
                            <a className={style.link_contacto} href={linkWhatsApp} target="_blank" rel="noopener noreferrer">
                                <Img src={WhatsApp} alt={"Ícone do WhatsApp"} estilo={""} />
                                <p> {numeros[0]} ( Principal )</p>
                            </a>
                        </div>
                        <div className={style.contacto}>
                            <a className={style.link_contacto} href="https://www.facebook.com/profile.php?id=61586846874905" target="_blank" rel="noopener noreferrer">
                                <Img src={Facebook} alt={"Ícone do Facebook"} estilo={""} />
                                <p> {numeros[1]}</p>
                            </a>
                        </div>
                    </div>
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