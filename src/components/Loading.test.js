import React from 'react';
import { render } from '@testing-library/react';
import Loading from './Loading';

describe('Loading Component', () => {
  it('should render the component when loading is true', () => {
    const { container } = render(<Loading loading={true} />);
    const backdrop = container.querySelector('.MuiBackdrop-root');
    const circularProgress = container.querySelector('.MuiCircularProgress-root');

    expect(backdrop).toBeInTheDocument();
    expect(circularProgress).toBeInTheDocument();
  });
});
