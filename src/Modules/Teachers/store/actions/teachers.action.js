import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../utils/axios";

export const fetchTeachers = createAsyncThunk("teachers/fetch", async () => {
    return await axiosInstance
      .get("https://focal-x-json-server.onrender.com/api/teachers")
      .then((res) => res.data);
  });