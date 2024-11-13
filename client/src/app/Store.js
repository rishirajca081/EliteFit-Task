import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/Todo/todoSlice";
// import userReducer from "../features/User/userSlice";
import formDataReducer from "../features/Form/formDataReducer"
import formReducer from "../features/Form/ShowFormslice"
import RerenderPage from "../features/Loadpage/Loadcontent"
import SearchbarReducer  from "../features/Search/SearchbarReducer";
import FilterReducer from "../features/Search/FilterReducer"
import TaskViewReducer  from "../features/Search/TaskViewReducer";
import  SortReducer from "../features/Search/SortReducer"

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    form: formReducer,
    formdata:formDataReducer,
    rerender:RerenderPage,
    searchbar:SearchbarReducer,
    filters:FilterReducer,
    taskviewfilter:TaskViewReducer  ,
    sortdata:SortReducer
  },
});