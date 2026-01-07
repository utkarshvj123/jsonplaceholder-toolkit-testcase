import { store } from "./store";
import type { RootState } from "./store";

describe("Redux store structure", () => {
  test("should have posts and singlePostDetail slices", () => {
    const state: RootState = store.getState();

    expect(state).toHaveProperty("posts");
    expect(state).toHaveProperty("singlePostDetail");
  });

  test("initial state shape for posts", () => {
    const state: RootState = store.getState();
    const postsState = state.posts;

    expect(Array.isArray(postsState.items)).toBe(true);
    expect(postsState.status).toBe("idle");
    expect(postsState.error).toBeNull();
  });

  test("initial state shape for singlePostDetail", () => {
    const state: RootState = store.getState();
    const detailState = state.singlePostDetail;

    expect(detailState.selected).toBeNull();
    expect(detailState.status).toBe("idle");
    expect(detailState.error).toBeNull();
  });
});
