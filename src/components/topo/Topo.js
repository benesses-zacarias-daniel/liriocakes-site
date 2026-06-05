import Button from "../buttons/Button";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import style from "./Topo.module.css"
import Lanche from "../assets/cakeLogoSF.png"

const Topo = () => {
    const numero = "+258 86 620 4359";
    const mens = "Olá! Gostaria de fazer uma encomenda na Lírio Cake's.";
    const linkWhatsApp = `https://wa.me/${numero}?text=${mens}`
    return (
        <header>
            <Logo src_log={Lanche} logo="Lírio Cake's" alt={"Logo da Lírio Cake's"} />
            <Menu mostrar={false} />
            {/* <button className={style.btn_topo}>Fazer Pedido</button> */}
            <Button estilo={style.btn_topo} onClick={() => { }} children={<a href={`${linkWhatsApp}`} className={style.ajustar_link}>Encomendar</a>} />
        </header>
    );
}
export default Topo;