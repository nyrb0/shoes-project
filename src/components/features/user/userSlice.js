import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../utils/constants";


export const createUser = createAsyncThunk(
    'users/createUser',async(payload,thunkAPI)=>{
        try{
            const res = await axios.post(`${BASE_URL}/users`,payload)
            return res.data;
        }catch(e){
            console.log(e)
            return thunkAPI.rejectWithValue(e)
        }
    })
const initialState = {
    currentUser:{},
    cart:[],
    isLoading:false,
}

const userSlice =createSlice({    
    name:'categories',
    initialState,
    reducers:{
        addItemToCart:(state,{payload})=>{
            let newCart = [...state.cart];
            const found = newCart.find(({id})=> id ===payload.id)
            if(found){
                newCart = newCart.map(item=>{
                    return item.id === payload.id ? {...item,quantity: payload.quantity || item.quantity + 1}
                    :item
                })
            }else newCart.push({...payload,quantity:1})

            state.cart = newCart;
        }
    },
    extraReducers:(builder)=>{
        // builder.addCase(getCategories.pending,(state,{payload})=>{
        //     state.list = payload;
        //     state.isLoading = true;
        // });
        builder.addCase(createUser.fulfilled,(state,{payload})=>{
            state.currentUser = payload;
            // state.isLoading = false;
        });
        // builder.addCase(getCategories.rejected,(state,{payload})=>{
        //     state.list = payload;
        //     state.isLoading = false;
        // });
    }
})
export  const {addItemToCart} = userSlice.actions;
export default userSlice.reducer