import { createContext, useState, useContext, useRef } from "react";

const PaginaContext = createContext();

const Context = ({ children }) => {
    const [paginaAtiva, setPaginaAtiva] = useState('home');
    const mainRef = useRef(null);

    const mudarPagina = (novaPagina) => {
        setPaginaAtiva(novaPagina);
        if (mainRef.current) {
            mainRef.current.scrollTo({ top: 0, behavior: "smooth" })
        }
    };

    return (
        <PaginaContext.Provider value={{ paginaAtiva, mudarPagina, mainRef }}>
            {children}
        </PaginaContext.Provider>
    );
}

const usePagina = () => {
    return useContext(PaginaContext);
}

export { usePagina };
export default Context;