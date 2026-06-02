import style from "./Hero.module.css";
import Img from "../img/Img";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import { usePagina } from "../context/Context";

const Hero = ({ mostrarExplorar = false, imgFundo = false, src, alt, titulo, tituloFoco, mens }) => {
    const { mudarPagina } = usePagina();
    const estiloHeroImg = imgFundo ? style.hero_img_desc : style.area_img;
    const estiloContainer = imgFundo ? style.hero_sobre : style.hero_area_geral;
    const estiloImg = imgFundo ? style.img_fundo : style.img_hero;

    return (
        <div className={estiloContainer}>
            <div className={style.hero_area}>
                {/* Msg */}
                {!imgFundo && (
                    <div className={style.hero_container_texto}>
                        <div className={style.hero_titulo}>
                            <h1>{titulo}<span className={style.foco}>{tituloFoco}</span></h1>
                        </div>
                        <div className={style.hero_mens}>
                            <p>{mens}</p>
                        </div>
                        <div className={style.hero_btn}>

                            <Button children={<a href="https://wa.me/258849754315?text=Olá! Quero fazer um pedido" className={style.ajustar_link}>Fazer Pedido</a>} estilo={style.btn_ped} onClick={() => {
                                console.log("Fazer Pedido");
                            }} />

                            {mostrarExplorar && (
                                <Button children={<Link to={"/mozfood/menu"}>
                                    Explorar Menu
                                </Link>} estilo={style.link_hero} onClick={() => {
                                    mudarPagina("menu");
                                }} />)
                            }

                        </div>
                    </div>
                )}
                <div className={style.hero_img}>
                    <div className={estiloHeroImg}>
                        <Img src={src} alt={alt} estilo={estiloImg} />
                        {imgFundo && (
                            <div className={style.hero_desc_sobre}>
                                <div className={style.desc_mens}>
                                    <h1>{titulo}</h1>
                                    <p>{mens}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;