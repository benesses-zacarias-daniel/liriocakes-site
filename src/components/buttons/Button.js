import style from "./Button.module.css"

const Button = ({ children, estilo, onClick }) => {
    return (
        <button className={`${style.primario} ${estilo}`} onClick={onClick}>{children}</button>
    );
}

export default Button;