import React, { useState } from 'react'
import styles from '../../styles/Profile.module.css'
import { useDispatch } from 'react-redux'
const Profile = () => {
    const dis = useDispatch();
    const [dataLogin,setDataLogin] = useState({
        name:'',
        email:'',
        password:'',
        avatar:''
    })  
    console.log(dataLogin)
    const handleChange = ({target:{value,name}})=>{
        setDataLogin({...dataLogin,[name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const isEmpty = Object.values(dataLogin).some(val => val)
        if(!isEmpty)return;
        dis(createUser(dataLogin))
        closeForm();
    }
    return (
        <div className={styles.profile}>
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

                <div className={styles.link} onClick={()=>toggleCurrrentFormType('login')}>
                    I already have an account
                </div>
                <button type='submit' className={styles.submit}>
                    Create an account
                </button>
            </form>
            )}
        </div>
    )
}

export default Profile
