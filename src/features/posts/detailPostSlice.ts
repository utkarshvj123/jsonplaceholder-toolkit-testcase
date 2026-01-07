import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Post, SinglePostState } from "../../interfaces";
import { jsonAPI } from "../../api/jsonAPI";

//----First initial state
//--Need to create slicer using createSlice method which will return slice value
//--Now in this we need have
//i name
//ii. initialState,
//iii.  reducers: {},
//iv. extraReducers
//v. now extra reducer has   extraReducers: (builders) => {},
//vi. inside this we need to do
//builder.addCase(apiFunctionCallName.fulfied/pending/failed,state=>state.data=action.payload)

// //------If we are ccreating asuync function----
// 1. we need to first create fucntion/action name with shouldd have createasyncfunction in it
// 2. inside createAsynFUnction we need to pass two this one is the tuype of returned value and the type which we are passing on callling that funcituon like id or some other details.
// 3. Now inside the async function add parameter value what we want to apss on calling the api and type tits pass
export const fetchSinglePost = createAsyncThunk<Post, string>(
  "singlePostDetail/single",
  async (id: string) => {
    const response = await jsonAPI.get<Post>(`/posts/${id}`);
    return response.data;
  }
);

const initialState: SinglePostState = {
  selected: null,
  status: "idle",
  error: null,
};

const singlePostSlicer = createSlice({
  name: "single",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSinglePost.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSinglePost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selected = action.payload;
      })
      .addCase(fetchSinglePost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch";
      });
  },
});

export default singlePostSlicer.reducer;
