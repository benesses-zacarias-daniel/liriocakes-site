import { useState } from "react";
import Button from "../buttons/Button";
import Hero from "../hero/Hero";
import style from "./Catalogo.module.css";
import Pedido from "../pedido/Pedido";
import Pratos from "../pratos/Pratos";
import Passos from "../pratos/Passos";
import Lirio from "../assets/image.png";
import Mensagem from "../assets/sms.svg";
import WhatsApp from "../assets/cht.svg";
import Cake1 from "../assets/cakes/cake1.jpg";
import Cake2 from "../assets/cakes/cake2.jpg";
import Cake3 from "../assets/cakes/cake3.jpg";
import Cake4 from "../assets/cakes/cake4.jpg";
import Cake5 from "../assets/cakes/cake5.jpg";
import Cake6 from "../assets/cakes/cake6.jpg";
import Cake7 from "../assets/cakes/cake7.jpg";
import Cake8 from "../assets/cakes/cake8.jpg";
import Cake9 from "../assets/cakes/cake9.jpg";
import Cake10 from "../assets/cakes/cake10.jpg";
import Cake11 from "../assets/cakes/cake11.jpg";
import Cake12 from "../assets/cakes/cake12.jpg";
import Cake13 from "../assets/cakes/cake13.jpg";
import Cake14 from "../assets/cakes/cake14.jpg";
import Cake15 from "../assets/cakes/cake15.jpg";
import Cake16 from "../assets/cakes/cake16.jpg";
import Cake17 from "../assets/cakes/cake17.jpg";
import Cake18 from "../assets/cakes/cake18.jpg";
import Cake19 from "../assets/cakes/cake19.jpg";
import Cake from "../assets/cake.svg";
import Presente from "../assets/gift.svg";

const Catalogo = () => {
    const [mostrarTodosPratos, setMostrarTodosPratos] = useState(false);

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
                    <Pratos src={Cake1} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                    <Pratos src={Cake2} alt={"Prato de "} desc={"Mathápa de couvé"} preco={250} prato={"Mathápa"} />
                    <Pratos src={Cake3} alt={"Prato de "} desc={"Sushi fresco"} preco={250} prato={"Sushimi"} />

                    {
                        mostrarTodosPratos && (
                            <>
                                <Pratos src={Cake4} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                                <Pratos src={Cake5} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                                <Pratos src={Cake6} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                                <Pratos src={Cake7} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                                <Pratos src={Cake8} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                                <Pratos src={Cake9} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                                <Pratos src={Cake10} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                                <Pratos src={Cake11} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                                <Pratos src={Cake12} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                                <Pratos src={Cake13} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                                <Pratos src={Cake14} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                                <Pratos src={Cake15} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                                <Pratos src={Cake16} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                                <Pratos src={Cake17} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                                <Pratos src={Cake18} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                                <Pratos src={Cake19} alt={"Prato de "} desc={"Prato de um bom bla bla"} preco={250} prato={"Filé Minhom"} />
                            </>
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