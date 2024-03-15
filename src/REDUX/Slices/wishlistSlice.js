import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        addWishlistItem:(state,action)=>{
          state.push(action.payload)
        },
        removeWishlistItem:(state,action)=>{
          return state.filter(item=>item.id!=action.payload) //do not assign only return in case of array
        }
    }
})

export const {addWishlistItem,removeWishlistItem} = wishlistSlice.actions
export default wishlistSlice.reducer 