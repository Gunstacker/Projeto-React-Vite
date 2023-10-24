import { useState, useEffect } from "react";
import styles from "./Mensagem.module.css";

interface MensagemType {
    type: string;
    msg?: string;
}

function Mensagem({type,msg} : MensagemType) {
    const [visivel, setVisivel] = useState(false);
    
    useEffect(()=>{
        if(!msg) {
            setVisivel(false);
            return;
        }
        setVisivel(true);
        const timer = setTimeout(()=>{
            setVisivel(false);
        },3000);
        return () =>clearTimeout(timer);
    }, [msg]);

    return (
        <>
            {visivel && (
                <div className={`${styles.msg} ${styles[type]}`} >
                {msg}
                </div>
            )}
        </>
    );
}

export default Mensagem;