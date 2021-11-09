import { configureStore } from "@reduxjs/toolkit";
import { UserReducer, UserModuleName } from "./user";

export const store = configureStore({
  reducer: {
    [UserModuleName]: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
