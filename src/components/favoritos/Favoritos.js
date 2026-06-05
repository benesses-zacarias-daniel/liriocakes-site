import { Link } from "react-router-dom";
import { usePagina } from "../context/Context";
import Pratos from "../bolos/Bolos";
import style from "./Favoritos.module.css"
import Seta from "../assets/seta.svg";
import Button from "../buttons/Button";

import Cake1 from "../assets/cakes/cake1.jpg";
import Cake2 from "../assets/cakes/cake2.jpg";
import Cake3 from "../assets/cakes/cake3.jpg";
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
                <Pratos src={Cake1} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                <Pratos src={Cake2} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                <Pratos src={Cake3} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
            </div>
        </div>
    )
}

export default Favoritos;