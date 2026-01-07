import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Post, PostsState } from "../../interfaces";
import { jsonAPI } from "../../api/jsonAPI";
export const fetchPosts = createAsyncThunk<Post[]>(
  "posts/fetchPosts",
  async () => {
    const response = await jsonAPI.get<Post[]>("posts");
    return response.data;
  }
);

const initialState: PostsState = {
  items: [],
  status: "idle",
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch";
      });
  },
});

export default postsSlice.reducer;
