import img_jose from '../../img/integrante-jose.jpg'
import img_marx from '../../img/integrante-marx.jpeg'
import img_leo from '../../img/integrante-leo.jpg'
import img_ivaldir from '../../img/integrante-ivaldir.png'

import styles from './assets/Sobre.module.css'

function Sobre() {
    return (
        <div>
            <h1>Sobre nós</h1>
            <p>
                O Pet Finder surgiu inicialmente em uma disciplina de DCEX4 do curso de Engenharia de
                software da Universidade de Pernambuco. Temos o intuito de auxiliar pessoas a encontrarem
                os seus animais desaparecidos, como forma de motivação, a pessoa que perdeu seu pet pode
                definir uma recompensa para outros que o encontrar.
            </p>
            <h1>Integrantes</h1>
            <section className={styles.integrantes}>
                <div className={styles.card_integrante}>
                    <img src={img_jose} alt="" width="200" height="200"/>
                    <p>José Ferreira</p>
                    <p>Desenvolvedor</p>
                </div>
                <div className={styles.card_integrante}>
                    <img src={img_marx} alt="" width="200" height="200"/>
                    <p>Marx Santos</p>
                    <p>Desenvolvedor</p>
                </div>
                <div className={styles.card_integrante}>
                    <img src={img_leo} alt="" width="200" height="200"/>
                    <p>Leonardo Vitor</p>
                    <p>Desenvolvedor</p>
                </div>
                <div className={styles.card_integrante}>
                    <img src={img_ivaldir} alt="" width="200" height="200"/>
                    <p>Ivaldir Júnior</p>
                    <p>Orientador</p>
                </div>
            </section>
        </div>
    )
}

export default Sobre