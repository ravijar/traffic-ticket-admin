import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";
import { AuthProvider } from "../context/AuthContext";
import { MemoryRouter } from "react-router-dom";

describe("Login Component", () => {
  it("renders the Login component with form elements", () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </MemoryRouter>
    );

    // Check if the component renders form elements
    expect(screen.getByLabelText("User ID")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("submits the form with valid input", () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </MemoryRouter>
    );

    const userIdInput = screen.getByLabelText("User ID");
    const passwordInput = screen.getByLabelText("Password");
    const loginButton = screen.getByText("Login");

    fireEvent.change(userIdInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // Submit the form
    fireEvent.click(loginButton);

  });

});
