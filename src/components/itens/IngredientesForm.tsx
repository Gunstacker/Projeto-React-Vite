import styles from "./ItemForm.module.css";
import { useState } from "react";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import * as React from "react";

interface TipoType{
    id: number;
    name: string;
}

interface ValorType {
    id?: string;
    name?: string;
    custo?: number;
    descricao?: string;
}

interface RestauranteData {
    id: number;
    name:string;
    price: number;
    tipos: TipoType;
    total: number;
    valores: ValorType[];
}

interface valoresProps{
    handleSubmit: any;
    btnText: string;
    itemData: RestauranteData;
}

function IngredientesForm ({handleSubmit,btnText, itemData }: valoresProps){
    const [valor, setValor] = useState<ValorType>({});

    function submit (val: React.FormEvent){
        val.preventDefault();
        itemData.valores.push(valor);
        handleSubmit(itemData);
    }

    function handleChange (val: React.ChangeEvent<HTMLInputElement>){
        setValor(
            {...valor, 
                [val.target?.name]: val.target.value}
        );
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do Custo"
                name="name"
                placeholder="Insira o nome do custo"
                handleOnChange={handleChange} />
            <Input
                type="number"
                text="Custo"
                name="custo"
                placeholder="Insira o valor deste custo"
                handleOnChange={handleChange} />
            <Input
                type="text"
                text="Descrição do Custo"
                name="descricao"
                placeholder="Descreva o custo"
                handleOnChange={handleChange} />
            <SubmitButton text ={btnText} />
        </form>
    );
}

export default IngredientesForm;
