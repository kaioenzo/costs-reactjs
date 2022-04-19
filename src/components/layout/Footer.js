import {FaGithub, FaLinkedin,}  from 'react-icons/fa'
import { Link } from 'react-router-dom'

import styles from './Footer.module.css'
function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.redes_sociais}>
                <a href="https://github.com/kaioenzo" target="_blank" rel="noopener noreferrer"><li><FaGithub/></li></a>
                <a href="https://linkedin.com/in/kaio-enzo" target="_blank" rel="noopener noreferrer"><li><FaLinkedin/></li></a>
            </ul>
            <p className={styles.copyright}>
                <span>Costs</span> &copy; 2021
            </p>
        </footer>
    )
}
export default Footer