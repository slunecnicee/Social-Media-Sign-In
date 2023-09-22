import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Features/userSlice";

export const store=configureStore({
reducer:{
    user:userSlice,
}

})



export type RootState=ReturnType<typeof store.getState>;