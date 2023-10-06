import { createSlice } from "@reduxjs/toolkit";
import { fetchStudents } from "../actions/students.action";

const studentsReducer = createSlice({
  name: "students",
  initialState: {
    data: [],
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default studentsReducer.reducer;