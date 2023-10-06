import { createSlice } from "@reduxjs/toolkit";
import { fetchCourses } from "../actions/courses.action";

const coursesReducer = createSlice({
  name: "courses",
  initialState: {
    data: [],
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default coursesReducer.reducer;