import { configureStore } from "@reduxjs/toolkit";
import MyProductReducer from "../redux/MyProductSlice"
import MyCartReducer from "../redux/MyCartSlice";

export const store = configureStore({
    reducer: {
        product: MyProductReducer,
        cart: MyCartReducer,
    }
})