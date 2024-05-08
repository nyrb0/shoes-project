import styles from '../../styles/Header.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import LOGO from '../../images/logo.svg';
import AVATAR from '../../images/avatar.jpg';
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { toggleForm } from '../features/user/userSlice';
import { useEffect, useState } from 'react';
import { useGetProductsQuery } from '../features/api/apiSlice';
const Header = ()=>{
    const {currentUser} = useSelector(({user})=>user)
    const dis = useDispatch();
    const navigate = useNavigate();

    const [searchValue,  setSearchValue] = useState('');
    const [values,setValues]=useState({
        name:'Guest',
        avatar:AVATAR
    })
    const {data,isLoading} = useGetProductsQuery({title:searchValue})

    const handleClick = ()=>{
        if(!currentUser)dis(toggleForm(true));
        else navigate(ROUTES.PROFILE)
    }
    console.log(data)
    useEffect(()=>{
        if(!currentUser)return;
        setValues(currentUser)
    },[currentUser])

    const handleSearch = ({target:{value}})=>{
        setSearchValue(value)
    }
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
                        onChange={handleSearch}
                        value={searchValue}
                        />
                    </div>
                    {searchValue &&  
                    <div className={styles.box}>
                        {isLoading ? "loading" : !data.length ? "No results":(
                            data.map(({title,images,id})=>(
                                <Link onClick={()=>setSearchValue('')} className={styles.item} to={`/product/${id}`} key={id}>
                                    <div className={styles.image} style={{backgroundImage:`url(${images[0]})`}}>
                                    </div>
                                    <div className={styles.title}>
                                        {title}
                                    </div>
                                </Link>
                            ))
                        )}
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