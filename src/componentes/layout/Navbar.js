import Container from './Container'

import {Link} from 'react-router-dom'

function NavBar() {
    return(
        <nav>
            <Container>
                <Link to='/'> <p>Pet Finder</p> </Link>
                <ul>
                    <li><Link to="/animais">animais</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar