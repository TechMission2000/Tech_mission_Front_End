import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ServiceState {
  activeCategory: string | null;
}

const initialState: ServiceState = {
  activeCategory: null,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { setActiveCategory } = serviceSlice.actions;
export default serviceSlice.reducer;
