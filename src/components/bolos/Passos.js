import Img from "../img/Img";
import style from "./Passos.module.css";

const Passos = ({ titulo, minInfo, passos, srcs, alts, descs, }) => {
    return (
        <div className={style.area_geral_passos}>
            <div className={style.titulo_passos}>
                <h2>{titulo}</h2>
                {minInfo && (
                    <div className={style.min_info}>
                        {minInfo}
                    </div>
                )}
            </div>
            <div className={style.area_passos}>
                <div className={style.passos}>
                    <div className={style.area_img_passos}>
                        <Img src={srcs[0]} alt={alts[0]} estilo={style.passos_img} />
                    </div>
                    <div className={style.info_passo}>
                        <p className={style.titulo_passo}>{passos[0]}</p>
                        <div className={style.desc_passos}>
                            {descs[0]}
                        </div>
                    </div>
                </div>
                <div className={style.passos}>
                    <div className={style.area_img_passos}>
                        <Img src={srcs[1]} alt={alts[1]} estilo={style.passos_img} />
                    </div>

                    <div className={style.info_passo}>
                        <p className={style.titulo_passo}>{passos[1]}</p>
                        <div className={style.desc_passos}>
                            {descs[1]}
                        </div>
                    </div>
                </div>
                <div className={style.passos}>
                    <div className={style.area_img_passos}>
                        <Img src={srcs[2]} alt={alts[2]} estilo={style.passos_img} />
                    </div>
                    <div className={style.info_passo}>
                        <p className={style.titulo_passo}>{passos[2]}</p>
                        <div className={style.desc_passos}>
                            {descs[2]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Passos;