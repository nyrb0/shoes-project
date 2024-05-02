import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../utils/constants";


export const getCategories = createAsyncThunk(
    'categories/getCategories',async(_,thunkAPI)=>{
        try{
            const res = await axios(`${BASE_URL}/categories`)
            return res.data;
        }catch(e){
            console.log(e)
            return thunkAPI.rejectWithValue(e)
        }
    })
const initialState = {
    list:[],
    isLoading:false
}

const categoriesSlice =createSlice({
    name:'categories',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getCategories.pending,(state,{payload})=>{
            state.list = payload;
            state.isLoading = true;
        });
        builder.addCase(getCategories.fulfilled,(state,{payload})=>{
            state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getCategories.rejected,(state,{payload})=>{
            state.list = payload;
            state.isLoading = false;
        });
    }
})

export default categoriesSlice.reducer