// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// mock implementations to avoid errors
jest.mock("@mui/x-charts/PieChart", () => ({
  PieChart: jest.fn().mockImplementation(({ children }) => children),
}));

jest.mock("@mui/x-charts", () => ({
  LineChart: jest.fn().mockImplementation(({ children }) => children),
}));
jest.mock("@mui/x-date-pickers", () => ({
  DatePicker: jest.fn().mockImplementation(({ children }) => children),
  LocalizationProvider: jest
    .fn()
    .mockImplementation(({ children }) => children),
}));
jest.mock("@mui/x-date-pickers/AdapterDayjs", () => ({
  AdapterDayjs: jest.fn().mockImplementation(({ children }) => children),
}));
jest.mock("@mui/x-date-pickers/internals/demo", () => ({
  DemoContainer: jest.fn().mockImplementation(({ children }) => children),
}));
