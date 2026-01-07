import axios from "axios";
import { jsonAPI } from "./jsonAPI";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("jsonAPI axios instance", () => {
  it("should call axios.create with correct baseURL", () => {
    expect(mockedAxios.create).toHaveBeenCalledWith({
      baseURL: "https://jsonplaceholder.typicode.com",
    });
  });

  it("jsonAPI is the axios instance", () => {
    expect(jsonAPI).toBe(mockedAxios.create.mock.results[0].value);
  });
});
