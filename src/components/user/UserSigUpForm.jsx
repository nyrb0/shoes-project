import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";
import styles from '../../styles/User.module.css'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/user/userSlice';
const UserSigUpForm = ({closeForm,toggleCurrrentFormType}) => {
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
        <div className={styles.wrapper}> 
            <div className={styles.close} onClick={closeForm}>
                <div className='icon'>
                    <IoIosClose />
                </div>
            </div>
            <div className={styles.title}>
                Sing Up
            </div>
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
        </div>
    )
}

export default UserSigUpForm
