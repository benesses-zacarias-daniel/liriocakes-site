import { useState } from "react";
import Button from "../buttons/Button";
import Hero from "../hero/Hero";
import Cakes from "../data/dados";
import style from "./Catalogo.module.css";
import Pedido from "../pedido/Pedido";
import Bolos from "../bolos/Bolos";
import Passos from "../bolos/Passos";
import Lirio from "../assets/image.png";
import Mensagem from "../assets/sms.svg";
import WhatsApp from "../assets/cht.svg";
import Cake from "../assets/cake.svg";
import Presente from "../assets/gift.svg";

const Catalogo = () => {
    const [mostrarTodosPratos, setMostrarTodosPratos] = useState(false);
    const CakesFiltrado = Cakes.filter(cakes => cakes?.id !== 1 && cakes?.id !== 4 && cakes?.id !== 14);

    const onClick = (evt) => {
        if (mostrarTodosPratos) {
            setMostrarTodosPratos(false);
            evt.target.innerHTML = "Ver Todos";
        } else {
            setMostrarTodosPratos(true);
            evt.target.innerHTML = "Ver Menus";
        }
    }

    return (
        <div className={style.menu}>
            <Hero alt={"Ícone do hero da sessão do meun!"} src={Lirio} mostrarExplorar={false} imgFundo={false} mens={"Descubra bolos, doces e salgados preparados especialmente para você."} titulo={"Nosso Catálogo"} tituloFoco={""} />
            <div className={style.area_menu}>
                <div className={style.titulo_area_menu}>
                    <h2>Menu</h2>
                    <div className={style.actao_menu_mais}>
                        <div className={style.min_desc_menu}>
                            Os favoritos da nossa comunidade!
                        </div>
                        <div className={style.area_btn_ver}>
                            <Button children={"Ver Todos"} estilo={style.btn_menu_ver} onClick={(evt) => {
                                onClick(evt);
                            }} />
                        </div>
                    </div>
                </div>
                <div className={style.pratos_d_menu}>
                    <Bolos src={Cakes[0].src} texto={"Bolo de Casamento"} alt={Cakes[0].alt} desc={Cakes[0].descricao} preco={Cakes[0].preco} nomeBolo={Cakes[0].nome} />
                    <Bolos src={Cakes[3].src} alt={Cakes[3].alt} desc={Cakes[1].descricao} preco={Cakes[3].preco} nomeBolo={Cakes[3].nome} />
                    <Bolos src={Cakes[13].src} alt={Cakes[13].alt} desc={Cakes[2].descricao} preco={Cakes[13].preco} nomeBolo={Cakes[13].nome} />

                    {
                        mostrarTodosPratos && (
                            CakesFiltrado.map((cakes) => {
                                return <Bolos src={cakes.src} key={cakes.id} alt={cakes.alt} desc={cakes.descricao} preco={cakes.preco} nomeBolo={cakes.nome} />;
                            }
                            )
                        )
                    }
                </div>
                <Passos titulo={"Os 3 Passos da Encomenda"} minInfo={""} srcs={[Cake, Mensagem, Presente]} descs={["Explore nosso catálogo e encontre o bolo ou doce prefeito para sua ocasião.", "Entre em contacto pelo WhatsApp e informe os dados do seu pedido.", "Produzimos tudo com carrinho e entregamos no prazo combinado."]} alts={["Ícone de colher e garfo cruzados", "Ícone de carrinho de super mercado", "Ícone de carro de entrega"]} passos={["Escolha", "Encomende", "Receba"]} />
                <Pedido tipo={2} alt={"Ícone de mensagem"} titulo_pedido={"Encontrou o bolo dos seus sonhos ?"} desc_pedido={"Clique no botão abaixo para nos enviar sua escolha pelo WhatsApp. Personalizamos o tamanho, a massa e o recheio do jeito que você desejar!"} src={WhatsApp} texto={"Encomendar pelo WhatsApp"} estiloBtn={style.btn_comer} />
            </div>
        </div>
    );
}

export default Catalogo;