import { createSlice} from "@reduxjs/toolkit";

export const ShowFormslice = createSlice({
  name: "form",
  initialState: false,
  reducers: {
    setShowForm: (state, action) => {
        return action.payload
    },
  },
});
export const { setShowForm } = ShowFormslice.actions;
export default ShowFormslice.reducer;