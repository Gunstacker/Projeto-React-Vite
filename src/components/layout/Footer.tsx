import styles from './Footer.module.css';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.lista_social}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p className={styles.copyright}>
                Página Criada por <span>Augusto</span> &copy; 2023
            </p>
        </footer>
    );
}
export default Footer;