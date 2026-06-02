import { usePagina } from "../context/Context";
import Menu from "./Menu";
import Home from "./Home";
import style from "./Sessao.module.css"
import SobreNos from "./SobreNos";

const Sessao = () => {

    const { paginaAtiva } = usePagina();

    switch (paginaAtiva) {
        case 'menu':
            return (
                <section className={style.sessao}>
                    <Menu />
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