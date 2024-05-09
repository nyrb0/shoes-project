import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductQuery } from '../features/api/apiSlice';
import styles from '../../styles/Category.module.css'
import Products from '../Products/Products';
import { useSelector } from 'react-redux';
import Categories from './Categories';
const Category = () => {
    const {id} = useParams();
    const {list} = useSelector(({categories})=>categories)
   
    const defaultValues = {
        title:'',
        price_min:0,
        price_max:0,
    }
    const defaultParams = {
        categoryId:id,
        limit:5,
        offset:5,
        ...defaultValues,
    }
    const [isEnd,setIsEnd] = useState(false);
    const [cat,setCat] = useState(null);
    const [items,setItems] = useState([]);
    const [values,setValues] = useState(defaultValues);
    const [params,setParams] = useState(defaultParams);

    const {data=[],isLoading,isSuccess} = useGetProductQuery(params);
    useEffect(()=>{ 
        if(!id)return 
        setValues(defaultValues);
        setItems([])
        setIsEnd(false)
        setParams({...defaultParams,categoryId:id})
    },[id]) 
    useEffect(()=>{
        if(!isLoading) return;
        if(!data.length) return setIsEnd(true)

        const products = Object.values(data)
        console.log(products)
        if(!products.length)return;

        setItems((_items)=>[..._items,...products])
    },[data,isLoading])

    useEffect(()=>{
        if(!id || !list.length)return;
        const  name = list.find((item)=>item.id === id * 1)
        setCat(name)
    },[id,list])

    
    const handleChange = ({target:{value,name}})=>{
        setValues({...values,[name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setItems([])
        setIsEnd(false)
        setParams({...defaultParams,...values})
    }
    
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>{cat?.name}</h2>
            <form  className={styles.filters} onSubmit={handleSubmit    }>
                <div className={styles.filter}>
                    <input 
                    type="text"
                    name='title'
                    onChange={handleChange}  
                    placeholder='Product bane'
                    value={values.title}
                    />
                </div>
                <div className={styles.filter}>
                    <input 
                    type="number"
                    name='price_min'
                    onChange={handleChange}  
                    placeholder='0'
                    value={values.price_min}
                    />
                    <span>Price from</span>
                </div>
                <div className={styles.filter}>
                    <input 
                    type="number"
                    name='price_max'
                    onChange={handleChange}  
                    placeholder=''
                    value={values.price_max}
                    />
                    <span>Price to</span>
                </div>
                <button type="submit" hidden/>
            </form>
            {isLoading ?(
                <div className='preloader'>
                    loading...
                </div>
            ): !isSuccess ||!items.length ? (
                <div className={styles.back}>
                    <span>No results</span>
                    <button>Reset</button>
                </div>
            ):(
                <div>
                    <Products 
                    title=''
                    products={items} 
                    style={{padding:0}} 
                    amount={items.length}/>
                </div>
            )
        }
        <div className={styles.more}>
            {!isEnd&&(
                <button onClick={()=>
                    setParams({...params,offset:params.offset + params.limit})}>
                        See more
                </button>
            )}
        </div>
        </section>
    )
}   

    export default Category
