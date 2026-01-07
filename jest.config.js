module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-fixed-jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>./src/__mocks__/styleMock.ts",
    // "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>./src/__mocks__/fileMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
