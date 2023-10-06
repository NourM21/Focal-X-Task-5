import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../utils/axios";

export const fetchStudents = createAsyncThunk("students/fetch", async () => {
    return await axiosInstance
      .get("https://focal-x-json-server.onrender.com/api/students")
      .then((res) => res.data);
  });