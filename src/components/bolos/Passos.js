import Img from "../img/Img";
import style from "./Passos.module.css";

const Passos = ({ titulo, minInfo, dados }) => {
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
                {dados.map((passos) => {
                    return (<div key={passos.id} className={style.passos}>
                        <div className={style.area_img_passos}>
                            <Img src={passos.src} alt={passos.alt} estilo={style.passos_img} />
                        </div>
                        <div className={style.info_passo}>
                            <p className={style.titulo_passo}>{passos.passo}</p>
                            <div className={style.desc_passos}>
                                {passos.desc}
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Passos;