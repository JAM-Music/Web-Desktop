import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@utils/types/user";

interface State {
  data: User | undefined;
}

const initialState: State = {
  data: undefined,
};

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
    },
    clear: (state) => {
      state.data = undefined;
    },
  },
});

export const UserActions = UserSlice.actions;
export const UserReducer = UserSlice.reducer;
