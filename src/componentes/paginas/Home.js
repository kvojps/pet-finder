import styles from './assets/Home.module.css';
import img from '../../img/img-home.png'

function Home() {
    return(
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Pet Finder</span></h1>
            <p>Encontre seu pet desaparecido ou ganhe recompensas!</p>
            <button type="submit">Saiba mais </button>
            <img src={img} alt="bazProjects"/>
            <a href="https://pt.vecteezy.com/vetor-gratis/pet-logo">
                Pet Logo Vetores por Vecteezy
            </a>
        </section>
    ) 
}

export default Home