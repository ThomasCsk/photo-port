import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../index';

afterEach(cleanup);

describe('Nav component', () => {
  // First Test
  it('renders', () => {
    render(<Nav />);
  });

  // Second Test
  it('matches snapshot DOM node structure', () => {
    //we'll use the asFragment function, which returns a snapshot of the About component
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Third Test
  describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    // Arrange
    const { getByLabelText } = render(<Nav />);

    // Assert
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
  })

  // Fourth Test
  describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav />);
  
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  
  })
})