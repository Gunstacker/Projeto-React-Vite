import {Link} from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../../img/logo3.png";

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img className={styles.logoImg} src={logo} alt="Logo" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Login">Login</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Cadastro">Cadastro</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}
export default Navbar;