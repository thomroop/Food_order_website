import { createSlice } from "@reduxjs/toolkit";
import Login from "../Pages/Login";

const initial = JSON.parse (localStorage.getitem('auth')) ||{
    isAuthenticated : false,
    user:null, //(username: admin, role 'admin')
}

const authSlice = createSlice({
    name: 'auth', 
    initialState: initial,
    reducers:{
        Login:(state, action) =>{ //payload
            console.log (action)

        }
    }
})

export const {login} = authSlice.actions
export default authSlice.reducer