import { createSlice} from "@reduxjs/toolkit";

export const Loadcontent = createSlice({
  name: "rerender",
  initialState: true,
  reducers: {
    updateui: (state, action) => {
        return !state
    },
  },
});
export const { updateui} = Loadcontent.actions;
export default Loadcontent.reducer;