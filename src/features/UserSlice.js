import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    currUser:{
        username:'',
        email:'',
        gender:'',
        joined:''
    },
    accessToken:'',    
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setCurrUser: (state, user) =>{
            state.currUser = user.payload;
        },
        setAccessToken: (state, user) =>{
            state.accessToken = user.payload;
        },
    }
})

export const {setCurrUser,setAccessToken} = userSlice.actions;
export default userSlice.reducer;