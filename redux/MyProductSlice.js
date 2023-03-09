import { createSlice } from "@reduxjs/toolkit";

const MyProductSlice = createSlice({
    name: "product",
    initialState: [],
    reducers: {
        addMyproducts(state, action) {
            state.push(action.payload)
        }
    }
});

export const {addMyproducts} = MyProductSlice.actions;
export default MyProductSlice.reducer;