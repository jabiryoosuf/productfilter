import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
 allproduct:[],
 productCategory:[],
}

export const allproductApi = createAsyncThunk(
    "product/allproductApi",
    async()=>{
        const results = await axios.get('https://fakestoreapi.com/products');
        console.log(results);
        return results.data;
    }
)

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers:{
 [allproductApi.pending]:()=>{
    console.log("data pending");
 },
 [allproductApi.fulfilled]:(state,action)=>{
    state.allproduct=action.payload;
    console.log("data sucess");
 },
 [allproductApi.rejected]:()=>{
    console.log("data fail");
 }
  }
})


export default productSlice.reducer;