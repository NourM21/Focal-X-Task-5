import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import studentsSlice from "../Modules/Students/store/slice/students.slice";
import teachersSlice from "../Modules/Teachers/store/slice/teachers.slice";
import coursesSlice from "../Modules/Courses/store/slice/courses.slice";

const reducers = {
  reducer: {
    students: studentsSlice,
    teachers: teachersSlice,
    courses: coursesSlice,
  },
};

const store = configureStore(reducers, applyMiddleware(reduxThunk));

export default store;