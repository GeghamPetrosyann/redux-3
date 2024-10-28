import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./futures/users/users.slice";

export const store = configureStore({
    reducer: UserReducer
})