import styles from './styles.module.css'
import banner from '../../assets/banner.svg'

const Header = () => {
    return(
        <header className={styles.banner}>
            <img src={banner} alt="banner" aria-label="Banner Funko"/>
        </header>
    )
}

export default Header