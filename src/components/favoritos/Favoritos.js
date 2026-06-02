import { Link } from "react-router-dom";
import Pratos from "../pratos/Pratos";
import style from "./Favoritos.module.css"
import Food from "../assets/img.png";
import Seta from "../assets/seta.svg";
import Button from "../buttons/Button";
import { usePagina } from "../context/Context";
import Img from "../img/Img";

const Favoritos = () => {
    const { mudarPagina } = usePagina();

    return (
        <div className={style.area_favoritos}>
            <div className={style.titulo_e_min_desc}>
                <h2>Favoritos da Semana</h2>
                <div className={style.actao_menu_mais}>
                    <p className={style.min_desc_menu}>Os pratos mais pedidos dos últimos 7 dias.</p>

                    <div className={style.area_btn_ver}>
                        <Link to={"/mozfood/menu"}>
                            <Button estilo={style.btn_menu_ver} onClick={() => {
                                mudarPagina("menu");
                            }}>
                                Ver tudo <Img alt={"Imagem de seta"} estilo={style.seta_img} src={Seta} />
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
            <div className={style.area_fav_pratos}>
                <Pratos src={Food} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                <Pratos src={Food} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                <Pratos src={Food} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                <Pratos src={Food} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                <Pratos src={Food} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                <Pratos src={Food} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                <Pratos src={Food} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
            </div>
        </div>
    )
}

export default Favoritos;