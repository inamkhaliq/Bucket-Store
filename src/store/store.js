import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
const initialState= {
    Products:[
        {
        id: "123",
        title: "Blue t-shirt",
        description: "No fancy sizing charts here, one t-shirt size to rule them all",
        imageUrl: "/blue-tshirt.png",
        price: 399
        },
        {
        id: "456",
        title: "Yellow t-shirt",
        description: "This unique t-shirt is guaranteed to fit nobody, not even new born babies",
        imageUrl: "/yellow-tshirt.png",
        price: 499
        },
        {
        id: "789",
        title: "Red t-shirt",
        description: "The only product on our site that might actually be worth buying",
        imageUrl: "/red-tshirt.png",
        price: 799
        }
    ],
    Basket:[]
}
const productSlice=createSlice({
    name:"Products",
    initialState,
    reducers:{
        removeFromBasket:(state,action)=>{
            state.Products.find((itm)=>{
                if(itm.id===action.payload.id){
                    itm.added=false;
                    return itm;
                }
            })
        },
        addToBasket:(state,action)=>{
            state.Products.find((itm)=>{
                if(itm.id===action.payload.id){
                    itm.added=true;
                    return itm
                }
            })
        }
    }
})
let allSection = combineReducers({ PSection: productSlice.reducer})
export const{addToBasket,removeFromBasket}=productSlice.actions;
const store= configureStore({ reducer: allSection})    
export default store;