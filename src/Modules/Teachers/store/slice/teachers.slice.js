import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers } from "../actions/teachers.action";

const teachersReducer = createSlice({
  name: "teachers",
  initialState: {
    data: [],
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchTeachers.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default teachersReducer.reducer;