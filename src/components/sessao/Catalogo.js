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

    const PassosCatalogo = [
        {
            "id": 1,
            "passo": "Escolha",
            "desc": "Explore nosso catálogo e encontre o bolo ou doce prefeito para sua ocasião.",
            "alt": "Ícone de Bolo",
            "src": Cake
        }, {
            "id": 2,
            "passo": "Encomende",
            "desc": "Entre em contacto pelo WhatsApp e informe os dados do seu pedido.",
            "alt": "Ícone de Mensagem",
            "src": Mensagem
        }, {
            "id": 3,
            "passo": "Receba",
            "desc": "Produzimos tudo com carrinho e entregamos no prazo combinado.",
            "alt": "Ícone de Embrulho de Presente",
            "src": Presente
        }];

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
                    <Bolos src={Cakes[0].src} texto={Cakes[0].texto} alt={Cakes[0].alt} desc={Cakes[0].descricao} preco={Cakes[0].preco} nomeBolo={Cakes[0].nome} />
                    <Bolos src={Cakes[3].src} texto={Cakes[3].texto} alt={Cakes[3].alt} desc={Cakes[3].descricao} preco={Cakes[3].preco} nomeBolo={Cakes[3].nome} />
                    <Bolos src={Cakes[13].src} texto={Cakes[13].texto} alt={Cakes[13].alt} desc={Cakes[13].descricao} preco={Cakes[13].preco} nomeBolo={Cakes[13].nome} />

                    {
                        mostrarTodosPratos && (
                            CakesFiltrado.map((cake) => {
                                return <Bolos src={cake.src} texto={cake.texto} key={cake.id} alt={cake.alt} desc={cake.descricao} preco={cake.preco} nomeBolo={cake.nome} />;
                            }
                            )
                        )
                    }
                </div>
                <Passos titulo={"Os 3 Passos da Encomenda"} minInfo={""} dados={PassosCatalogo} />
                <Pedido tipo={2} alt={"Ícone de mensagem"} titulo_pedido={"Encontrou o bolo dos seus sonhos ?"} desc_pedido={"Clique no botão abaixo para nos enviar sua escolha pelo WhatsApp. Personalizamos o tamanho, a massa e o recheio do jeito que você desejar!"} src={WhatsApp} texto={"Encomendar pelo WhatsApp"} estiloBtn={style.btn_comer} />
            </div>
        </div>
    );
}

export default Catalogo;