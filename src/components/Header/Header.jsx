import styles from './Header.module.css'
import logo from './Header-img/logo.svg'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__logo}>
                <img className={styles.header__logoImg} src={logo} alt="logo"/>
            </div>
            <menu className={styles.header__menu}>
                <ul className={styles.header__ul}>
                    <li className={styles.header__li}>
                        Catalog
                    </li>
                    <li className={styles.header__li}>
                        Stock
                    </li>
                    <li className={styles.header__li}>
                        Contact
                    </li>
                    <li className={styles.header__li}>
                        About
                    </li>
                </ul>
            </menu>
        </div>
    )
}
export default Header