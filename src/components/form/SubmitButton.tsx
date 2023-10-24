import styles from "./SubmitButton.module.css";

const SubmitButton = ({text}:{text?:string}) =>{
    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    );
};
export default SubmitButton;