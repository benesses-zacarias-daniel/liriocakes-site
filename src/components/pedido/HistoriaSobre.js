import style from "./HistoriaSobre.module.css";

const HistoriaSobre = () => {
    return (
        <div className={style.area_geral_historia}>
            <div className={style.historia}>
                <h2>Nossa História</h2>
                <p>O MozFood nasceu da paixão por redescobrir as raízes da cozinha moçambicana. Percebemos que, na correria do dia-a-dia, as receitas tradicionais estavam perdendo espaço para a convivência sem alma.</p>
                <p>Fundado em Nampula, nossa missão inicial era simples: criar uma ponte digital entre cozinhas artesanais e as famílias urbanas, mantendo vivo o segredo do tempero que atravessa séculos.</p>
            </div>
        </div>
    );
}


export default HistoriaSobre;