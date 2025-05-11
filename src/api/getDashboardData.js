import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "./APIS";

// get the funcking data from the api
const fetchData = createAsyncThunk(
  "data/fetchData",
  async ({ dataId = "" }, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const res = await axios.get(`${API}${dataId}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const deleteItem = createAsyncThunk(
  "data/deleteItem",
  async ({ id, dataId }, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;

    try {
      await axios.delete(`${API}${dataId}/${id}`);
      return { dataId, id };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const editItem = createAsyncThunk(
  "data/editItem",
  async ({ dataId = "", item }, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;

    try {
      const res = await axios.put(`${API}${dataId}/${item.id}`, item, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return { data: res.data, dataId };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const addItem = createAsyncThunk(
  "data/additem",
  async ({ dataId = "", item }, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;

    try {
      const res = await axios.post(`${API}${dataId}`, item, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return { data: res.data, dataId };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export { fetchData, deleteItem, editItem, addItem };
