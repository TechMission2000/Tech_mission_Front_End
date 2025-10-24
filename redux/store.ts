import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import serviceReducer from "./features/service/serviceSlice";

export const store = configureStore({
  reducer: {
    service: serviceReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
