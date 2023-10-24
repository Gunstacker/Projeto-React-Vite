import { BsFillTrashFill } from "react-icons/bs";
import styles from "./ItemCard.module.css";

interface ValorType {
    id?: string;
    name?:string;
    custo?:number;
    descricao?: string;
    handleRemove?: any;
}

function ValorCard ({id, name, custo, descricao, handleRemove}:ValorType){
    
    const remove = (val:any) => {
        val.preventDefault();
        handleRemove(id, custo);
    };

    return (
        <div className={styles.item_card}>
            <h4>{name}</h4>
            <p>
                <span>Custo Total: </span>R$ {custo}
            </p>
            <p>{descricao}</p>
            <div className={styles.item_card_action}>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    );
}

export default ValorCard;