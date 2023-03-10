import { createSlice } from "@reduxjs/toolkit";

const MyProductSlice = createSlice({
    name: "product",
    initialState: [],
    reducers: {
        addMyproducts(state, action) {
            state.push(action.payload)
        },

        increaseQuantity(state, action) {
            let myIndex = -1;
            state.map((item, index) => {
                if (item.id == action.payload) {
                    myIndex = index;
                }
            });
            if (myIndex == -1) { }
            else {
                state[myIndex].quantity = state[myIndex].quantity + 1;
            }
        },

        decreaseQuantity(state, action) {
            let myIndex = -1;
            state.map((item, index) => {
                if (item.id == action.payload) {
                    myIndex = index;
                }
            });
            if (myIndex == -1) { }
            else {
                state[myIndex].quantity = state[myIndex].quantity - 1;
            }
        }

    }
});

export const { addMyproducts, increaseQuantity, decreaseQuantity } = MyProductSlice.actions;
export default MyProductSlice.reducer;