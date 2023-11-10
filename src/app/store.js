import { configureStore } from "@reduxjs/toolkit";
import { ApiSlice } from "../features/apiSlice";

export const store = configureStore({
    reducer: {
        [ApiSlice.reducerPath]: ApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiSlice.middleware),
});
