import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../utils/constants";


export const createUser = createAsyncThunk(
    'user/createUser',async(payload,thunkAPI)=>{
        try{
            const res = await axios.post(`${BASE_URL}/users`,payload)
            return res.data
        }catch(e){
            console.log(e)
            return thunkAPI.rejectWithValue(e)
        }
    })

    export const loginUser = createAsyncThunk(
        'user/loginUser',async(payload,thunkAPI)=>{
            try{
                const res = await axios.post(`${BASE_URL}/auth/login`,payload)
                const login = await axios(`${BASE_URL}/auth/profile`,{
                    headers:{
                        "Authorization": `Bearer ${res.data.access_token}`
                    }
                })  
                return login.data;
            }catch(e){
                console.log(e)
                return thunkAPI.rejectWithValue(e)
            }
        })
export const upDateUser = createAsyncThunk(
    'user/upDateUser',async(payload,thunkAPI)=>{
        try{
            const res = await axios.put(`${BASE_URL}/users/${payload.id}`,payload)
            return res.data
            }catch(e){
                console.log(e)
                return thunkAPI.rejectWithValue(e)
            }
        })

const addCurrentUser = (state,{payload})=>{
    state.currentUser = payload;
}
const initialState = {
    currentUser:null,
    cart:[],
    isLoading:false,
    formType:'signup',
    showForm:false
}

const userSlice =createSlice({    
    name:'user',
    initialState,
    reducers:{
        addItemToCart:(state,{payload})=>{
            let newCart = [...state.cart];
            const found = newCart.find(({id})=> id === payload.id)
            if(found){
                newCart = newCart.map(item=>{
                    return item.id === payload.id ? {...item,quantity: payload.quantity || item.quantity + 1}
                    :item
                })
            }else newCart.push({...payload,quantity:1})

            state.cart = newCart;
        },
        removeItemFromCart:(state,{payload})=>{
            state.cart = state.cart.filter(({id})=> id !==  payload)
        },
        toggleForm:(state,{payload})=>{ 
            state.showForm = payload;
        },
        toggleFormType:(state,{payload})=>{ 
            state.formType = payload;
        }

    },
    extraReducers:(builder)=>{
        // builder.addCase(getCategories.pending,(state,{payload})=>{
        //     state.list = payload;
        //     state.isLoading = true;
        // });
        builder.addCase(createUser.fulfilled,addCurrentUser);
        builder.addCase(loginUser.fulfilled,addCurrentUser);
        builder.addCase(upDateUser.fulfilled,addCurrentUser);
        // builder.addCase(getCategories.rejected,(state,{payload})=>{
        //     state.list = payload;
        //     state.isLoading = false;
        // });
    }
})
export  const {addItemToCart,toggleForm,toggleFormType,removeItemFromCart } = userSlice.actions;
export default userSlice.reducer