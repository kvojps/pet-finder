import styles from './assets/Login.module.css'

function Login() {
    return (
        <div>
            <h1>Faça login no Pet Finder</h1>
            <div>
                <form action="" className={styles.form}>
                    <input type="email" name="" id="" placeholder="Digite seu e-mail"/>
                    <input type="password" name="" id="" placeholder="Digite sua senha"/>
                </form>
            </div>
        </div>
    )
}

export default Login