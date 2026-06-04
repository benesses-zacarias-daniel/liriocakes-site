import Pedido from "../pedido/Pedido";
import Favoritos from "../favoritos/Favoritos";
import Hero from "../hero/Hero";
// import HeroHome from "../heros/HeroHome";
import Passos from "../pratos/Passos";
import style from "./Home.module.css";
import Phone from "../assets/whatsApp.svg";
import ImgHero from "../assets/img.png";
import colherGarfo from "../assets/comer.svg";
import carrinho from "../assets/carrinho.svg";
import entrega from "../assets/del.svg";

const Home = () => {
    return (
        <div className={style.home}>
            {/* <HeroHome /> */}
            <Hero alt={"Imagem de bolo de Casamento"} src={ImgHero} mostrarExplorar={true} imagemFundo={false} mens={"Bolos personalizados, cupcakes, doces e salgados preparados com ingredientes selecionados para tornar cada celebração inesquecível."} titulo={"Sabores feitos com amor para os seus "} tituloFoco={"momentos especiais."} />
            <Favoritos />
            <Passos titulo={"Como Funciona"} minInfo={""} passos={["Escolha", "Encomende", "Receba"]} srcs={[colherGarfo, carrinho, entrega]} alts={["Ícone de colher e garfo cruzados", "Ícone de carrinho de super mercado", "Ícone de carro de entrega"]} descs={["Explore nosso catálogo e encontre o bolo ou doce perfeito para sua ocasião.", "Entre em contacto pelo WhatsApp e informe os detalhes do seu pedido.", "Produzimos tudo com carinho e entregamos no prazo combinado."]} />
            <Pedido titulo_pedido={"Pronto para adoçar o seu dia?"} alt={"Ícone de Telefone"} src={Phone} desc_pedido={"Faça já a sua encomenda e surpreenda quem você ama com sabores únicos."} texto={"Encomendar pelo WhatsApp"} tipo={1} estiloBtn={style.btn_fome_pedido} />
        </div>
    );
}

export default Home;