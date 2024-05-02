import React from 'react'
import styles from '../../styles/Footer.module.css';
import { ROUTES } from '../../utils/routes';
import LOGO from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="Stuff" />
                </Link>
            </div>
            <div className={styles.rights}>
                Developed by <a href="#">Nu1bo</a>
            </div>
            <div className={styles.socials}>
                <a href="#">
                    <div className={"icon"}>
                        <CiYoutube/>
                    </div>
                </a>

                <a href="#">
                    <div className={"icon"}>
                        <CiFacebook/>
                    </div>
                </a>

                <a href="#">
                    <div className={"icon"}>
                        <CiInstagram/>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Footer;
