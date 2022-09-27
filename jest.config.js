/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverageFrom: ["<rootDir>/src/**/*.ts*"],
  testMatch: ["<rootDir>/test/**/*.test.ts*"],
};
