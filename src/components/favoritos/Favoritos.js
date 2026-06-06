import { Link } from "react-router-dom";
import { usePagina } from "../context/Context";
import Bolos from "../bolos/Bolos";
import style from "./Favoritos.module.css"
import Seta from "../assets/seta.svg";
import Button from "../buttons/Button";
import Cakes from "../data/dados";
import Img from "../img/Img";

const Favoritos = () => {
    const { mudarPagina } = usePagina();

    return (
        <div className={style.area_favoritos}>
            <div className={style.titulo_e_min_desc}>
                <h2>Favoritos da Semana</h2>
                <div className={style.actao_menu_mais}>
                    <p className={style.min_desc_menu}>Os produtos mais pedidos pelos nossos clientes.</p>

                    <div className={style.area_btn_ver}>
                        <Link to={"/liriocakes/catalado"} onClick={() => {
                            mudarPagina("catalogo");
                        }}>
                            <Button estilo={style.btn_menu_ver} onClick={() => { }}>
                                Ver tudo <Img alt={"Imagem de seta"} estilo={style.seta_img} src={Seta} />
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
            <div className={style.area_fav_pratos}>
                <Bolos src={Cakes[0].src} texto={"Bolo de Casamento"} alt={Cakes[0].alt} desc={Cakes[0].descricao} preco={Cakes[0].preco} nomeBolo={Cakes[0].nome} />
                <Bolos src={Cakes[3].src} alt={Cakes[1].alt} desc={Cakes[1].descricao} preco={Cakes[1].preco} nomeBolo={Cakes[2].nome} />
                <Bolos src={Cakes[13].src} alt={Cakes[2].alt} desc={Cakes[2].descricao} preco={Cakes[2].preco} nomeBolo={Cakes[1].nome} />

            </div>
        </div>
    )
}

export default Favoritos;