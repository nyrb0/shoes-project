import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../../styles/Cart.module.css'
import {  CiCircleMinus   } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { sumBy } from '../../utils/common';
import { addItemToCart, removeItemFromCart } from '../features/user/userSlice';
const Cart = () => {
    const dis = useDispatch();
    const {cart} = useSelector(({user})=>user)
    const changeQuantiry = (item,quantity)=>{
        dis(addItemToCart({...item,quantity}))
    }
    const removeItem = (item) =>{
        dis(removeItemFromCart(item.id))
    }

    return (
    <section className={styles.cart}>
        <h2 className={styles.title}>Your cart</h2>
        {!cart.length ?(
            <div className={styles.empty}>Here is empty</div>
        ):(
        <>
            <div className={styles.list}>
                {cart.map((item)=>{
                    const {title,category,images,price,quantity,id} = item
                    return(
                        <div className={styles.item} key={id}>
                            <div className={styles.image} 
                            style={{backgroundImage:`url(${images[0]})`}}
                            />
                            <div className={styles.info}>
                                <div className={styles.name}>{title}</div>
                                <div className={styles.category}>{category.name}</div>
                            </div>
                            <div className={styles.price}>
                                {price}$
                            </div>
                            <div className={styles.quantity}>
                                <div className={styles.minus} onClick={()=>changeQuantiry(item,Math.max(1,quantity - 1))}>
                                    <div className='icon'>
                                        <CiCircleMinus />
                                    </div>
                                </div>
                                <span>{quantity}</span>
                                <div className={styles.plus} onClick={()=>changeQuantiry(item,Math.max(1,quantity + 1))}>
                                    <div className='icon'>
                                        <CiCirclePlus />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.total}>{price * quantity}</div>
                            <div className={styles.close} onClick={()=>removeItem(item)}>
                                <CiCirclePlus />
                            </div>
                        </div>
                    )
                    
                })}
            </div>
            <div className={styles.actions}>
                <div className={styles.actions}>
                    TOTAL PRICE {`:    `}
                    <span>
                        {sumBy(cart.map(({quantity,price})=>quantity * price ))}$
                    </span>
                    <button className={styles.proceed}>Proceed to checkout</button>
                </div>

            </div>
        </>
        )}
    </section>
    )
}

export default Cart
