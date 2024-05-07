import styles from '../../styles/Header.module.css';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import LOGO from '../../images/logo.svg';
import AVATAR from '../../images/avatar.jpg';
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { toggleForm } from '../features/user/userSlice';
import { useEffect, useState } from 'react';
const Header = ()=>{
    const {currentUser} = useSelector(({user})=>user)
    const dis = useDispatch();
    const [values,setValues]=useState({
        name:'Guest',
        avatar:AVATAR
    })
    const handleClick = ()=>{
        if(!currentUser)dis(toggleForm(true));

    }
    useEffect(()=>{
        if(!currentUser)return;
        setValues(currentUser)
    },[currentUser])
    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="Stuff" />
                </Link>
            </div>
            <div className={styles.info}>
                <div className={styles.user} onClick={handleClick}>
                    <div className={styles.avatar} style={{backgroundImage:`url(${values.avatar})`}}/>
                    <div className={styles.username}>{values.name}</div>
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
                        <div className={styles.iconFav}>
                                <CiHeart />
                        </div>
                    </Link>
                    <Link to={ROUTES.HOME} className={styles.cart}>
                        <div className={styles.iconCart}>
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