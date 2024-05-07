import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../features/api/apiSlice';
import { ROUTES } from '../../utils/routes';
import Product from './Product';
import Products from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedProducts } from '../features/ptoducts/productSlice';

const SingleProduct = () => {
    const {id}=useParams();
    const dis = useDispatch();
    const navigate = useNavigate();
    const {related,list} = useSelector(({products})=>products);
    const {data,isLoading,isFetching,isSuccess} = useGetProductQuery({id})
    useEffect(()=>{
        if(!isFetching && !isLoading && !isSuccess){
            navigate(ROUTES.HOME)
        }
    },[isFetching,isLoading,isSuccess])

    useEffect(()=>{
        if(!data ) return;
        dis(getRelatedProducts(data.category.id))
    },[data,dis])
    return (
        !data ? (
            <section className={'preloader'}> Loading...</section>
        ):(
            <>
                <Product {...data}/>
                <Products products={related} amount={5} title={'Related Products'}/>
            </>
        )
    )
}

export default SingleProduct
