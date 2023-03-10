import { createSlice } from "@reduxjs/toolkit";

const MyCartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addProductToMyCart(state, action) {
            let myIndex = -1;
            state.map((item, index) => {
                if (item.id == action.payload.id) {
                    myIndex = index;
                }
            });
            if (myIndex == -1) {
                state.push({
                    "id": action.payload.id,
                    "brand": action.payload.brand,
                    "category": action.payload.category,
                    "description": action.payload.description,
                    "image": action.payload.image,
                    "price": action.payload.price,
                    "quantity": action.payload.quantity + 1,
                    "rating": action.payload.rating,
                    "title": action.payload.title
                });
            }
            else {
                state[myIndex].quantity = state[myIndex].quantity + 1;
            }
        },

        removeProductFromMyCart(state, action) {
            let myIndex = -1;
            state.map((item, index) => {
                if (item.id == action.payload.id) {
                    myIndex = index;
                }
            });
            if (myIndex == -1) { }
            else {
                state[myIndex].quantity = state[myIndex].quantity - 1;
            }
        },

        deleteProductFromMyCart(state, action) {
            return (state = state.filter(item => item.id !== action.payload));
        }
    }
});

export const { addProductToMyCart, removeProductFromMyCart, deleteProductFromMyCart } = MyCartSlice.actions;
export default MyCartSlice.reducer;