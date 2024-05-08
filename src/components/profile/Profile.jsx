import React, { useEffect, useState } from 'react'
import styles from '../../styles/Profile.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { upDateUser } from '../features/user/userSlice';
const Profile = () => {
    const dis = useDispatch();
    const{currentUser} = useSelector(({user})=>user)
    const [dataLogin,setDataLogin] = useState({
        name:'',
        email:'',
        password:'',
        avatar:''
    })  
   
    useEffect(()=>{
        if(!currentUser) return;
        setDataLogin(currentUser)
    },[currentUser])
    console.log(dataLogin)
    const handleChange = ({target:{value,name}})=>{
        setDataLogin({...dataLogin,[name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const isEmpty = Object.values(dataLogin).some(val => val)
        if(!isEmpty)return;
        dis(upDateUser(dataLogin))
    }
    return (
        <section className={styles.profile}>
            {!currentUser ? <span>You need log in</span>:(
                <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.group}>
                    <input 
                    type="email" 
                    name='email'
                    placeholder={'Your email'}  
                    value={dataLogin.email}
                    autoCapitalize='off' 
                    onChange={handleChange}
                    required
                    />
                    
                </div>

                <div className={styles.group}>
                    <input 
                    type="name" 
                    name='name'
                    placeholder={'Your name'}  
                    value={dataLogin.name}
                    autoCapitalize='off' 
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className={styles.group}>
                    <input 
                    type="password" 
                    name='password'
                    placeholder={'Your password'}  
                    value={dataLogin.password}
                    autoCapitalize='off' 
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className={styles.group}>
                    <input 
                    type="avatar" 
                    name='avatar'
                    placeholder={'Your avatar'}  
                    value={dataLogin.avatar}
                    autoCapitalize='off' 
                    onChange={handleChange}
                    required
                    />
                </div>
                <button type='submit' className={styles.submit}>
                    Up date
                </button>
            </form>
            )}
        </section>
    )
}

export default Profile
