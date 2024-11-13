import { createSlice} from "@reduxjs/toolkit";

export const SortReducer = createSlice({
  name: "sortdata",
  initialState: "",
  reducers: {
    setsortdata: (state, action) => {
        return action.payload
    },
  },
});
export const { setsortdata } = SortReducer.actions;
export default SortReducer.reducer;