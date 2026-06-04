import style from "./Logo.module.css";
import Img from "../img/Img";

const Logo = ({ logo, src_log, alt }) => {
    return (
        <div className={style.area_logo_nome}>
            {/* {src_log && ( */}
            <Img src={src_log} estilo={""} alt={alt} />
            {/* )} */}
            <h2 className={style.nome_lirio}>{logo}</h2>
        </div>
    );
}

export default Logo;