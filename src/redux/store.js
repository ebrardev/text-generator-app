    import { configureStore } from "@reduxjs/toolkit";
    import textSlice from "./Text/textslice";



    export const store = configureStore({

        reducer:{
            text: textSlice,
        }
    })