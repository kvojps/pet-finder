import Container from './Container'
import styles from './assets/Navbar.module.css'

import {Link} from 'react-router-dom'

function NavBar() {
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to='/' className={styles.slogan}> <p>Pet Finder🐾</p> </Link>
                <ul className={styles.list}>
                    <li><Link to="/animais">animais</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar