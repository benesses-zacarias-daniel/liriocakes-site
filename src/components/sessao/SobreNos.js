import { Link } from "react-router-dom";
import Hero from "../hero/Hero";
import Img from "../img/Img";
import style from "./SobreNos.module.css";
import Fundo from "../assets/img.png";
import Button from "../buttons/Button";
import { usePagina } from "../context/Context";
import Passos from "../pratos/Passos";
import Fresco from "../assets/fresco.svg";
import Speed from "../assets/speed.svg";
import Lanche from "../assets/lanche.svg";
import HistoriaSobre from "../pedido/HistoriaSobre";

const SobreNos = () => {
    const { mudarPagina } = usePagina();

    const onClick = () => {
        mudarPagina("menu");
    }

    return (
        <div className={style.sobre}>
            <Hero mens={"Elevamos a herança culinária de Moçambique com a convivência da tecnologia moderna, entregando autenticidade à sua porta."} alt={"Imagem de fundo bla!"} src={Fundo} titulo={"Saber que Une Gerações"} imgFundo={true} mostrarExplorar={false} />
            <HistoriaSobre />
            <Passos alts={["Ícone de folha de árvore", "Ícone de energia", "Ícone de colher e garfo"]} descs={["Parcerias directas com produtores locais garantem que o sabor cheguee vibrante ao seu prato.", "Logística inteligente e rastreamento em tempo real para que sua comida chegue sempre quente.", "Receitas que respeitam as tradições, preparadas por quem realmente entende da nossa terra."]} minInfo={"Nossos pilares fundamentais garantem que cada pedido seja uma experiencia de excelência"} passos={["Ingredientes Frescos", "Entrega Rápida", "Sabor Autêntico"]} srcs={[Fresco, Speed, Lanche]} titulo={"O Que Nos Define"} />
            <div className={style.area_acao_sobre}>
                <div className={style.sobre_img_desc}>
                    <Img alt={"Imagem de fundo bla!"} estilo={style.img_fundo} src={Fundo} />
                    <div className={style.area_desc_sobre}>
                        <div className={style.desc_mens}>
                            <h2>Pronto para provar a diferença?</h2>
                            <p>Explore os melhores sabores de Moçambique agora mesmo.</p>
                        </div>
                        <div className={style.area_btn_sobre}>
                            <Link to={"/mozfood/menu"}>
                                <Button children={"Ver Menu Completo"} estilo={style.btn_sobre_acao} onClick={() => {
                                    onClick();
                                }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SobreNos;