import { createSlice} from "@reduxjs/toolkit";

export const TaskViewReducer = createSlice({
  name: "taskviewfilter",
  initialState: "",
  reducers: {
    setTaskview: (state, action) => {
        return action.payload
    },
  },
});
export const { setTaskview } = TaskViewReducer.actions;
export default TaskViewReducer.reducer;