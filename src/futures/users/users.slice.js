import { createSlice } from "@reduxjs/toolkit"
import { addUser, getUsers } from "./users.api"

const initialState = {
    accounts: []
}

export const UserSlice = createSlice({
    name: "users",
    initialState,
    status: "",
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state, action) => {
                state.status = "loading..."
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = ""
                state.accounts = action.payload
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.status = ""
                state.accounts.push(action.payload);
            })
            
    }
})

export const UserReducer = UserSlice.reducer
//unwrap
//debouncing
//trotoling