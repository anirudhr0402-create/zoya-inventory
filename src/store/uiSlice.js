import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarCollapsed: false,
  theme: "light"
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },

    setTheme(state, action) {
      state.theme = action.payload;
    }
  }
});

export const {
  toggleSidebar,
  setTheme
} = uiSlice.actions;

export default uiSlice.reducer;