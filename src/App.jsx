import { useEffect, useState } from 'react'
import AppRoutes from './components/Routes/Routes'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Sidebar from './components/sidebar/Sidebar'
import { useDispatch } from 'react-redux'
import { getCategories } from './components/features/categories/categoriesSlice'
import Home from './components/home/Home'
import { getProducts } from './components/features/ptoducts/productSlice'


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCategories());
    dispatch(getProducts());
  },[dispatch])

  return (
    <div className='app'>
      <Header/>
      <div className='container'>  
          <Sidebar/>
          <AppRoutes/>
      </div>
      <Footer/>
    </div>
  )
}

export default App

