import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Outlet, Route } from 'react-router-dom';
import Navigation from './Navigation';
import AuthContext, { AuthProvider } from '../context/AuthContext';

const logoutUser = jest.fn();

const CustomAuthProvider = ({ children }) => {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(value) => {
          return (
            <div>
              {children(value)}
              <button onClick={logoutUser}>Logout</button>
            </div>
          );
        }}
      </AuthContext.Consumer>
    </AuthProvider>
  );
};

describe('Navigation', () => {
  it('renders the navigation bar with the provided items', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <CustomAuthProvider>
          {(value) => (
            <Navigation>
              <Outlet />
            </Navigation>
          )}
        </CustomAuthProvider>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Review')).toBeInTheDocument();
    expect(screen.getByText('Reports')).toBeInTheDocument();
    expect(screen.getByText('Schedule')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  it('selects the current route in the navigation bar', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/review']} initialIndex={0}>
        <CustomAuthProvider>
          {(value) => (
            <Navigation>
              <Outlet />
            </Navigation>
          )}
        </CustomAuthProvider>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
    expect(screen.getByText('Review').parentElement).toHaveClass('MuiListItemText-root');
  });

});
