import styles from './Navbar.module.css';
import logo from '../assets/logo.svg';

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <a href="#">
                <img src={logo} />
                <span></span>
            </a>
        </nav>
    )
}