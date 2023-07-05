import {configureStore} from '@reduxjs/toolkit'
import vendorslice from '../slice/vendorSlice'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

let persistConfig=  {
    key:'event_proposal',
    storage
};

let persistAutReducer=persistReducer(persistConfig,vendorslice)

export const store=configureStore({
    reducer:{
        vendor_slice:persistAutReducer
    }
})

export const persiststore=persistStore(store)