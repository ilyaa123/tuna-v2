import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState ={
    
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action) => {
            
        })
    },
})

export default userSlice.reducer