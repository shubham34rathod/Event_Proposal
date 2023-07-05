import { createSlice } from "@reduxjs/toolkit";

const initialStateValue={
    name:'',
    vendor_id:'',
    token_id:''
}

export const vendorSlice=createSlice({
    name:'vendorSlice',
    initialState:initialStateValue,
    reducers:{
        updateVendorDetail:(state,action)=>{
            state.name=action.payload.name;
            state.vendor_id=action.payload._id;
            state.token_id=action.payload.token;
            state.email=action.payload.email;
        }
    }
})

export const {updateVendorDetail} = vendorSlice.actions
export default vendorSlice.reducer