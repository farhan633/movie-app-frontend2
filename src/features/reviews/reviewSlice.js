import { createSlice } from "@reduxjs/toolkit";
export const reviewSlice = createSlice({
    name: 'reviews',
    initialState:{
        reviews: []
    },
    reducers:{
        addreviews:(state,action)=>{
            state.reviews = action.payload
        },
        addonereview:(state,action)=>{
            state.reviews.push(action.payload)
        },
        deletereviewby:(state, action)=>{
            const Id = action.payload
            state.reviews = state.reviews.filter(function(review){
                return review._id !== Id
            })
        }    }
})
export const {addreviews,addonereview,deletereviewby}=reviewSlice.actions
export default reviewSlice.reducer