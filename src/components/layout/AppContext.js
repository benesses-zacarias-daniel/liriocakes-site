import Topo from "../topo/Topo";
import Footer from "../footer/Footer";
import Sessao from "../sessao/Sessao";
import { usePagina } from "../context/Context";
import style from "./AppContext.module.css"
const AppContext = () => {
  const { mainRef } = usePagina();

  return (
    <div className={style.app}>
      <Topo />
      <main className={style.conteudo_principal} ref={mainRef}>
        <Sessao />
        <Footer nome={" Lírio Cake's"} provincia={"Nampula"} />
      </main>
    </div>
  );
}

export default AppContext;