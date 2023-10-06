import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../utils/axios";

export const fetchCourses = createAsyncThunk("courses/fetch", async () => {
    return await axiosInstance
      .get("https://focal-x-json-server.onrender.com/api/courses")
      .then((res) => res.data);
  });