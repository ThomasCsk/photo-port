import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../index';

afterEach(cleanup);

describe('About component', () => {
  // First Test
  it('renders', () => {
    render(<About />);
  });

  // Second Test
  it('matches snapshot DOM node structure', () => {
    //we'll use the asFragment function, which returns a snapshot of the About component
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
})