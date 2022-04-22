import styles from './assets/Login.module.css'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className={styles.main}>
            <div>
                <h1>Faça login no Pet Finder</h1>
                <form action="" className={styles.form}>
                    <input type="email" name="" id="" placeholder="Digite seu e-mail"/>
                    <input type="password" name="" id="" placeholder="Digite sua senha"/>
                </form>
                <div>
                    <button type="submit" className={styles.botao_enviar}>Enviar</button>
                    <Link to ='/' className={styles.link}> Ainda não é cadastrado? Cadastre-se</Link>
                </div>
            </div>
        </div>
    )
}

export default Login