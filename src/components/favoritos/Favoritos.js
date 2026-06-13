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
                <Bolos src={Cakes[0].src} texto={Cakes[0].texto} alt={Cakes[0].alt} desc={Cakes[0].descricao} preco={Cakes[0].preco} nomeBolo={Cakes[0].nome} />
                <Bolos src={Cakes[3].src} texto={Cakes[3].texto} alt={Cakes[3].alt} desc={Cakes[3].descricao} preco={Cakes[3].preco} nomeBolo={Cakes[3].nome} />
                <Bolos src={Cakes[13].src} texto={Cakes[13].texto} alt={Cakes[13].alt} desc={Cakes[13].descricao} preco={Cakes[13].preco} nomeBolo={Cakes[13].nome} />

            </div>
        </div>
    )
}

export default Favoritos;