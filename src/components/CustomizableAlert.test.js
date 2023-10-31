import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CustomizableAlert from './CustomizableAlert';

describe('CustomizableAlert', () => {
  test('it renders the alert when open is true', () => {
    render(<CustomizableAlert open={true} />);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
  });

  test('it does not render the alert when open is false', () => {
    render(<CustomizableAlert open={false} />);
    const alert = screen.queryByRole('alert');
    expect(alert).not.toBeInTheDocument();
  });

  test('it displays the provided message', () => {
    const message = 'This is a test message';
    render(<CustomizableAlert open={true} message={message} />);
    const alert = screen.getByText(message);
    expect(alert).toBeInTheDocument();
  });
});
