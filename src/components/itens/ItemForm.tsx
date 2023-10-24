import { useState, useEffect } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ItemForm.module.css";


function ItemForm ({handleSubmit,
    restauranteData,
    btnText
}:{
    handleSubmit?: any;
    restauranteData?: any;
    btnText: string;
}){
    const [tipos, setTipos] = useState([]);
    const [restaurante, setRestaurante] = useState(restauranteData || {});

    useEffect (() => {
        fetch("http://localhost:8080/tipos",{
            method:"GET",
            headers: {"Content-Type":"application/json"}
        })
        .then((resp) => resp.json())
        .then((data) => setTipos(data))
        .catch((erro)=> console.log(erro));
    },[]);

    const submit = (val: any) => {
        val.preventDefault();
        handleSubmit(restaurante);
    };

    function handleChange (val: any){
        setRestaurante(
            {...restaurante, 
                [val.target.name]: val.target.value}
        );
    }

    function handleTipo(val:any){
        setRestaurante({
            ...restaurante,
            tipos: {
                id: val.target.value,
                name: val.target.options[val.target.selectedIndex].text
            }
        });
    }

    return (
        <form className={styles.form} onSubmit={submit}>
            <Input 
                type="text"
                text="Nome"
                name="name"
                placeholder="Insira o Nome"
                handleOnChange={handleChange}
                value={restaurante.name? restaurante.name : ""} />
            <Input 
                type="number"
                text="Preço"
                name="price"
                placeholder="Insira o preço do item"
                handleOnChange={handleChange}
                value={restaurante.price? restaurante.price : ""} />
            <Select
                name="tipo_id"
                text="Selecione o tipo:"
                options={tipos}
                handleOnChange={handleTipo}
                value={restaurante.tipos?restaurante.tipos.id:""} />
            <SubmitButton text={btnText} />
        </form>
    )
};

export default ItemForm;