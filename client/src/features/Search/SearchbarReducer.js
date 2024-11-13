import { createSlice} from "@reduxjs/toolkit";

export const SearchbarReducer = createSlice({
  name: "searchbar",
  initialState: "",
  reducers: {
    setSearchbar: (state, action) => {
        return action.payload
    },
  },
});
export const { setSearchbar } = SearchbarReducer.actions;
export default SearchbarReducer.reducer;