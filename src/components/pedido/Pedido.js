import Button from "../buttons/Button";
import Img from "../img/Img";
import style from "./Pedido.module.css";

const Pedido = ({ tipo, titulo_pedido, desc_pedido, alt, src, texto, estiloBtn }) => {
    const estiloFinal = tipo === 1 ? style.area_pedido_home : style.area_pedido_menu;

    return (
        <div className={`${style.area_pedido} ${estiloFinal}`}>
            <div className={style.titulo_pedido}>
                <h2>{titulo_pedido}</h2>
            </div>
            <div className={style.desc_pedido}>
                {desc_pedido}
            </div>
            <div className={style.area_btn_pedido}>
                <Button estilo={estiloBtn} onClick={() => { }}>
                    <a href="https://wa.me/258849754315?text=Olá! Quero fazer um pedido" className={style.ajustar_link}><Img alt={alt} estilo={style.img_pedido} src={src} /> {texto}</a>
                </Button>
            </div>
        </div>
    )
}


export default Pedido;