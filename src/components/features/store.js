import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productSlice from "./ptoducts/productSlice";
import { apiSlice } from "./api/apiSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
    reducer:{
        categories:categoriesSlice,
        products:productSlice,
        user:userSlice,
        [apiSlice.reducerPath]:apiSlice.reducer,

    },
    middleware:(getDefault)=>getDefault().concat(apiSlice.middleware),
    devTools:true,
})