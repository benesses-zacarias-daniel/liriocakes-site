import Img from "../img/Img";
import style from "./Pratos.module.css";

const Pratos = ({ src, alt, preco, prato, desc }) => {
    return (
        <div className={style.area_geral_prato}>
            <div className={style.area_img_prato}>
                <Img src={src} alt={alt} estilo={style.img_prato} />
                <div className={style.preco_prato}>
                    <span>
                        {preco} MT
                    </span>
                </div>
            </div>
            <div className={style.info_prato}>
                <div className={style.titulo_prato}>
                    <h4>{prato}</h4>
                </div>
                <div className={style.desc_prato}>
                    {desc}
                </div>
            </div>
        </div>
    );
}

export default Pratos;