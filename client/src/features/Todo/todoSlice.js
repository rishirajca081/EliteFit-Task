import { createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "showform",
  initialState: false,
  reducers: {
    setShowForm: (state, action) => {
        return action.payload
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;