import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AuthProvider } from './AuthContext';
import AuthContext from './AuthContext';

// Mock the `useNavigate` function
jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => (url) => url,
  };
});

describe('AuthContext', () => {
  it('provides initial context with no user', () => {
    const { container } = render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(value) => {
            return (
              <>
                <div>Username: {value.user?.username}</div>
                <div>Token: {value.authTokens?.token}</div>
              </>
            );
          }}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    expect(container).toMatchSnapshot();
  });

  it('logs out a user and clears the context', () => {
    const { container } = render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(value) => {
            return (
              <>
                <button onClick={() => value.logoutUser()}>Logout</button>
                <div>Username: {value.user?.username}</div>
                <div>Token: {value.authTokens?.token}</div>
              </>
            );
          }}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    const logoutButton = screen.getByText('Logout');
    fireEvent.click(logoutButton);

    expect(container).toMatchSnapshot();
  });
});
