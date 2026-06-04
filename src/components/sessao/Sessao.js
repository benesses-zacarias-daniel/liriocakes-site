import { usePagina } from "../context/Context";
import Catalogo from "./Catalogo";
import Home from "./Home";
import style from "./Sessao.module.css"
import SobreNos from "./SobreNos";

const Sessao = () => {

    const { paginaAtiva } = usePagina();

    switch (paginaAtiva) {
        case 'catalogo':
            return (
                <section className={style.sessao}>
                    <Catalogo />
                </section>
            );
        case 'sobre':
            return (
                <section className={style.sessao}>
                    <SobreNos />
                </section>
            );
        default:
            return (
                <section className={style.sessao}>
                    <Home />
                </section>
            );
    }

}


export default Sessao;