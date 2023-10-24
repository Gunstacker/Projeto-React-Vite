import styles from "./ItemCard.module.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import {Link} from "react-router-dom";

function ItemCard ({
    id,
    name,
    price,
    tipo,
    handleRemove
} : {
    id?:number | null;
    name?:string |null;
    price?: number | null;
    tipo: string;
    handleRemove?: any|null;
}) {
    const remove = (e:any) => {
        e.preventDefault();
        handleRemove (id);
    };
    
    return (
        <div className={styles.item_card}>
            <h4>{name}</h4>
            <p>
                <span> Preço: </span> R${price}
            </p>
            <p className={styles.tipo_text}>
                <span className={`${styles[tipo.toLowerCase()]}`}> 
                </span>
                {tipo} 
            </p>
            <div className={styles.item_card_action}>
                <Link to={`/restaurante/${id}`}>
                    <BsPencil /> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    );
};

export default ItemCard;