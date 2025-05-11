import { createSlice } from "@reduxjs/toolkit";
import {
  addItem,
  deleteItem,
  editItem,
  fetchData,
} from "../../api/getDashboardData";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    team: [],
    lunch: [],
    dinner: [],
    tea_coffee: [],
    loading: {
      team: false,
      lunch: false,
      dinner: false,
      tea_coffee: false,
    },
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        const { dataId } = action.meta.arg;
        state.loading[dataId] = false;
        state[dataId] = action.payload;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        const { dataId, id } = action.payload;
        state[dataId] = state[dataId].filter((item) => item.id !== id);
        state.loading[dataId] = false;
      })
      .addCase(editItem.fulfilled, (state, action) => {
        const { dataId, data } = action.payload;
        state[dataId] = state[dataId].map((item) =>
          item.id === data.id ? data : item
        );
        state.loading[dataId] = false;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        const { dataId, data } = action.payload;
        state[dataId].push(data);
        state.loading[dataId] = false;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state, action) => {
          const { dataId } = action.meta.arg;
          state.loading[dataId] = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          const { dataId } = action.meta.arg;
          state.loading[dataId] = false;
          state.error = `Failed to fetch ${dataId} data: ${action.error.message}`;
        }
      );
    // https://picsum.photos/448/488random=1
    //
  },
});

export default dataSlice.reducer;
