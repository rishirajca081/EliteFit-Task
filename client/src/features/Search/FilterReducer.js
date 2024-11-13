import { createSlice} from "@reduxjs/toolkit";

export const FilterReducer = createSlice({
  name: "filters",
  initialState: "",
  reducers: {
    setFilter: (state, action) => {
        return action.payload
    },
  },
});
export const { setFilter } = FilterReducer.actions;
export default FilterReducer.reducer;