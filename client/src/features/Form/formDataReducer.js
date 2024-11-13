import { createSlice} from "@reduxjs/toolkit";

export const formDataReducer = createSlice({
  name: "formdata",
  initialState: [],
  reducers: {
    setFormdata: (state, action) => {
        return action.payload
    },
    removeFormdata: (state, action) => {
        return []
    },
  },
});
export const { setFormdata ,removeFormdata} = formDataReducer.actions;
export default formDataReducer.reducer;