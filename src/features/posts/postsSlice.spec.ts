import { configureStore } from "@reduxjs/toolkit";
import postsReducer, { fetchPosts } from "./postsSlice";
import { jsonAPI } from "../../api/jsonAPI";

jest.mock("../../api/jsonAPI");

describe("postsSlice thunk behavior", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("fetchPosts dispatches correct actions on success", async () => {
    const fakeData = [{ id: 1, userId: 1, title: "OK", body: "X" }];
    (jsonAPI.get as jest.Mock).mockResolvedValue({ data: fakeData });

    const store = configureStore({
      reducer: { posts: postsReducer },
    });

    // dispatch the thunk
    await store.dispatch(fetchPosts());

    const state = store.getState().posts;
    expect(state.status).toBe("succeeded");
    expect(state.items).toEqual(fakeData);
    expect(jsonAPI.get).toHaveBeenCalledWith("posts");
  });

  it("handles error", async () => {
    (jsonAPI.get as jest.Mock).mockRejectedValue(new Error("fail"));

    const store = configureStore({
      reducer: { posts: postsReducer },
    });

    await store.dispatch(fetchPosts());
    const state = store.getState().posts;

    expect(state.status).toBe("failed");
    expect(state.error).toBe("fail");
  });
  it("handles error 2nd", async () => {
    (jsonAPI.get as jest.Mock).mockRejectedValue({});
    const store = configureStore({
      reducer: { posts: postsReducer },
    });

    await store.dispatch(fetchPosts());
    const state = store.getState().posts;

    expect(state.status).toBe("failed");
    expect(state.error).toBe("Failed to fetch");
  });
});
