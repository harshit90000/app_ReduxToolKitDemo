import { configureStore } from "@reduxjs/toolkit";
import MyProductReducer from "../redux/MyProductSlice"

export const store = configureStore({
    reducer: {
        product: MyProductReducer,
    }
})