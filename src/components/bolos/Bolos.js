import Img from "../img/Img";
import style from "./Bolos.module.css";

const Bolos = ({ src, alt, preco, texto, nomeBolo, desc }) => {
    return (
        <div className={style.area_geral_prato}>
            <div className={style.area_img_prato}>
                <Img src={src} alt={alt} estilo={style.img_prato} />
                <div className={style.preco_prato}>
                    <span>
                        {preco} MT
                    </span>
                </div>
                {texto && (
                    <div className={style.cake_destacar}>
                        <span>
                            {texto}
                        </span>
                    </div>)}
            </div>
            <div className={style.info_prato}>
                <div className={style.titulo_prato}>
                    <h4>{nomeBolo}</h4>
                </div>
                <div className={style.desc_prato}>
                    {desc}
                </div>
            </div>
        </div>
    );
}

export default Bolos;