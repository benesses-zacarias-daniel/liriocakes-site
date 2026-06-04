import Button from "../buttons/Button";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import style from "./Topo.module.css"
import Lanche from "../assets/lanche.svg"

const Topo = () => {

    return (
        <header>
            <Logo src_log={Lanche} logo="Lírio Cake's" alt={"Logo da Lírio Cake's"} />
            <Menu mostrar={false} />
            {/* <button className={style.btn_topo}>Fazer Pedido</button> */}
            <Button estilo={style.btn_topo} onClick={() => { }} children={<a href="https://wa.me/258849754315?text=Olá! Quero fazer um pedido" className={style.ajustar_link}>Encomendar</a>} />
        </header>
    );
}
export default Topo;