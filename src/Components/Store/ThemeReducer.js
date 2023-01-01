import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = { theme: false };

const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    switchTheme: (state) => {
      state.theme = !state.theme;
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;