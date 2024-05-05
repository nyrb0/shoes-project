import { useDispatch, useSelector } from "react-redux";
import Products from "../Products/Products";
import Poster from "../poster/Poster";
import Categories from "../categoties/Categories";
import Banner from "../banner/Banner";
import { useEffect } from "react";
import { filterByPrice } from "../features/ptoducts/productSlice";


const Home =()=>{
    const dispatch = useDispatch();
    const {categories,products}= useSelector((state)=>state)
    useEffect(()=>{
        if(!products.list)return;
        dispatch(filterByPrice(100));
    },[dispatch,products.length])
    return( 
        <>
            <Poster/>
            <Products products={products.list} amount={5} title={'Trending'}/>
            <Banner/>
            <Categories products={categories.list} amount={5} title={'Worth seeing'}/>
            <Products products={products.filtered}  amount={5} title={'Less than 100$'}/>
        </>
    )
}
export default Home;