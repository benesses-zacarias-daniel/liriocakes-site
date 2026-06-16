import Pedido from "../pedido/Pedido";
import Favoritos from "../favoritos/Favoritos";
import Hero from "../hero/Hero";
import Passos from "../bolos/Passos";
import style from "./Home.module.css";
import WhatsApp from "../assets/whatsApp.svg";

import Mensagem from "../assets/sms.svg";
import Lirio from "../assets/image.png";
import Cake from "../assets/cake.svg";
import Presente from "../assets/gift.svg";

const Home = () => {
    const PassosEntregas = [
        {
            "id": 1,
            "passo": "Escolha",
            "desc": "Explore nosso catálogo e encontre o bolo ou doce perfeito para sua ocasião",
            "alt": "Ícone de Bolo",
            "src": Cake
        }, {
            "id": 2,
            "passo": "Encomende",
            "desc": "Entre em contacto pelo WhatsApp e informe os detalhes do seu pedido.",
            "alt": "Ícone de Mensagem",
            "src": Mensagem
        }, {
            "id": 3,
            "passo": "Receba",
            "desc": "Produzimos tudo com carinho e entregamos no prazo combinado.",
            "alt": "Ícone de Embrulho de Presente",
            "src": Presente
        }];

    return (
        <div className={style.home}>
            {/* <HeroHome /> */}
            <Hero alt={"Imagem de bolo de Casamento"} src={Lirio} mostrarExplorar={true} imagemFundo={false} mens={"Bolos personalizados, cupcakes, doces e salgados preparados com ingredientes selecionados para tornar cada celebração inesquecível."} titulo={"Sabores feitos com amor para os seus "} tituloFoco={"momentos especiais."} />
            <Favoritos />
            <Passos titulo={"Como Encomendar"} minInfo={""} dados={PassosEntregas} />
            <Pedido titulo_pedido={"Pronto para adoçar o seu dia?"} alt={"Ícone de Telefone"} src={WhatsApp} desc_pedido={"Faça já a sua encomenda e surpreenda quem você ama com sabores únicos."} texto={"Encomendar pelo WhatsApp"} tipo={1} estiloBtn={style.btn_fome_pedido} />
        </div>
    );
}

export default Home;