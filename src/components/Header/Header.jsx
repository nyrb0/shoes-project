import styles from '../../styles/Header.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import LOGO from '../../images/logo.svg';
import AVATAR from '../../images/avatar.jpg';
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
const Header = ()=>{

    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="Stuff" />
                </Link>
            </div>
            <div className={styles.info}>
                <div className={styles.user}>
                    <div className={styles.avatar} style={{backgroundImage:`url(${AVATAR})`}}/>
                    <div className={styles.username}>Stuff Nu1bo</div>
                </div>
                <form className={styles.form}>
                    <div className={styles.input}>
                        <input 
                        type="search" 
                        name='search'
                        placeholder={'Search for anything'}
                        autoComplete='off'
                        onChange={()=>{}}
                        value={''}
                        />
                    </div>
                    {false &&  
                    <div className={styles.box}>
                    </div>}
                </form>
                <div className={styles.account}>
                    <Link to={ROUTES.HOME} className={styles.favourites}>
                        <div className={styles["icon-fav"]}>
                                <CiHeart />
                        </div>
                    </Link>
                    <Link to={ROUTES.HOME} className={styles.cart}>
                        <div className={styles["icon-cart"]}>
                            <CiShoppingCart />
                            <span className={styles.count}>
                                3
                            </span>
                        </div>
                    </Link>
                </div>  
            </div>
        </div>
    )
}
export default Header;