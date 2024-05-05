import React from 'react'
import BG from '../../images/computer.png'
import styles from '../../styles/Home.module.css'
const Poster = () => {
    return (
    <div>
        <section className={styles.home}>
            <div className={styles.title}>BIG SALE 20%</div>
            <div className={styles.product}>
                <div className={styles.text}>
                    <div className={styles.subtitle}>THE BESTSELLER OF 2024</div>
                    <div className={styles.head}>LENNON R2D2 WITH NVIDIA 5090 TI</div>
                    <button className={styles.button}>Shop now</button>
                </div>
                <div className={styles.image}>
                    <img src={BG} alt="" />
                </div>
            </div>
        </section>  
    </div>
    )
}

export default Poster
