import { configureStore } from "@reduxjs/toolkit";
import getAddDate from "../reducer/getAddDate";
export const store = configureStore({
    reducer: {
        getAddDate
    }
})