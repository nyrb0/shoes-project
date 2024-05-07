import React from 'react'
import UserSigUpForm from './UserSigUpForm'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../../styles/User.module.css'
import { toggleForm, toggleFormType } from '../features/user/userSlice'
import UserLoginForm from './UserLoginForm'
const UserForm = () => {
    const dis = useDispatch();
    const {showForm,formType} = useSelector(({user})=>user)

    const closeForm = ()=> dis(toggleForm(false));
    const toggleCurrrentFormType = (type)=>{
        dis(toggleFormType(type))
    }
    return (
        <>
            {showForm ?(
                    <>
                        <div className={styles.overlay} onClick={closeForm}/>
                        {formType === 'signup' 
                        ? 
                        <UserSigUpForm toggleCurrrentFormType={toggleCurrrentFormType} closeForm={closeForm}/>
                        : 
                        <UserLoginForm toggleCurrrentFormType={toggleCurrrentFormType}onClick={closeForm} closeForm={closeForm}/>}
                    </>
            ): <></>}
        </>
    )
}

export default UserForm
