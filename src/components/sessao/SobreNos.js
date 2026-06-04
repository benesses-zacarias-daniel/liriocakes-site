import { Link } from "react-router-dom";
import Hero from "../hero/Hero";
import Img from "../img/Img";
import style from "./SobreNos.module.css";
import Fundo from "../assets/img.png";
import Button from "../buttons/Button";
import { usePagina } from "../context/Context";
import Passos from "../pratos/Passos";
import Mensagem from "../assets/sms.svg";
import Cake from "../assets/cake.svg";
import Presente from "../assets/gift.svg";
import HistoriaSobre from "../pedido/HistoriaSobre";

const SobreNos = () => {
    const { mudarPagina } = usePagina();

    const onClick = () => {
        mudarPagina("catalogo");
    }

    return (
        <div className={style.sobre}>
            <Hero mens={"A Lírio Cake's nasceu da paixão pela confeitaria artesanal e pelo desejo de transformar momentos especiais em memórias inesquecíveis. Cada produto é preparado com dedicação, criatividade e ingredientes de qualidade."} alt={"Imagem de fundo bla!"} src={Fundo} titulo={"Uma história feita de sabor e dedicação."} imgFundo={true} mostrarExplorar={false} />
            <HistoriaSobre />
            <Passos alts={["Ícone de folha de árvore", "Ícone de energia", "Ícone de colher e garfo"]} descs={["Utilizamos ingredientes cuidadosamente escolhidos para garantir o melhor sabor.", "Valorizamos cada cliente e procuramos oferecer uma experiência acolhedora.", "Trabalhamos para que os pedidos cheguem frescos e no menor tempo possível."]} minInfo={"Levar sabor, qualidade e felicidade aos nossos clientes através de produtos feitos com carinho."} passos={["Qualidade", "Criatividade", "Compromisso"]} srcs={[Cake, Mensagem, Presente]} titulo={"Nossos Valores"} />
            <div className={style.area_acao_sobre}>
                <div className={style.sobre_img_desc}>
                    <Img alt={"Imagem de fundo bla!"} estilo={style.img_fundo} src={Fundo} />
                    <div className={style.area_desc_sobre}>
                        <div className={style.desc_mens}>
                            <h2>Venha experimentar nossos sabores.</h2>
                            <p>Entre em contacto e faça a sua encomenda hoje mesmo.</p>
                        </div>
                        <div className={style.area_btn_sobre}>
                            <Link to={"/liriocakes/catalogo"}>
                                <Button children={"Ver Catálogo Completo"} estilo={style.btn_sobre_acao} onClick={() => {
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