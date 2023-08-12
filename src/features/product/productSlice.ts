import {createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, Product } from '../../interfaces/Product';

export interface ProductState{
    data: IProduct;
    list: IProduct[]
}

const initialState: ProductState = {
    data: new Product(),
    list: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        setData: (state, action: PayloadAction<IProduct>) => {
            state.data = action.payload
        },
        setProducts: (state, action: PayloadAction<IProduct[]>)=>{
            state.list = action.payload
        },
    }
})

export const {setData, setProducts } = productSlice.actions

export default productSlice.reducer