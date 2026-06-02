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
            <Hero alt={"Imagem da sessão de hero da home"} src={ImgHero} mostrarExplorar={true} imagemFundo={false} mens={"Experimente a essência de Moçambique no conforto da sua casa. Entrega rápida, comida quente e os melhores e os melhores restaurantes da cidade."} titulo={"Sabor à sua"} tituloFoco={" Porta."} />
            <Favoritos />
            <Passos titulo={"O seu prato em 3 passos"} minInfo={""} passos={["Escolha", "Peça", "Receba"]} srcs={[colherGarfo, carrinho, entrega]} alts={["Ícone de colher e garfo cruzados", "Ícone de carrinho de super mercado", "Ícone de carro de entrega"]} descs={["Descricao de cada passo aqui sim aqui apareceram as o passo 1", "Descricao de cada passo aqui sim aqui apareceram o passo 2", "Descricao de cada passo aqui sim aqui apareceram as o passo 3."]} />
            <Pedido titulo_pedido={"Fome de comida de verdade ?"} alt={"Ícone de Telefone"} src={Phone} desc_pedido={" Peçca agora pelos nossos canais exclusivos e receba descontos especias na sua primeira entrga."} texto={"Pedir via WhatsApp"} tipo={1} estiloBtn={style.btn_fome_pedido} />
        </div>
    );
}

export default Home;