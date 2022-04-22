import styles from './assets/Login.module.css'

function Cadastro() {
    return (
        <div className={styles.main}>
            <div>
                <h1>Cadastre-se no Pet Finder</h1>
                <form action="" className={styles.form}>
                    <input type="email" name="" id="" placeholder="Digite seu e-mail"/>
                    <input type="password" name="" id="" placeholder="Digite seu usuário"/>
                    <input type="password" name="" id="" placeholder="Digite sua senha"/>
                    <input type="password" name="" id="" placeholder="Repita sua senha"/>
                </form>
                <div>
                    <button type="submit" className={styles.botao_enviar}>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default Cadastro