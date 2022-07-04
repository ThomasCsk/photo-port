import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../index';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
  // First Test
  it('renders', () => {
    render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
    />);
  })

  // Second Test
  it('matches snapshot DOM node structure', () => {
    //we'll use the asFragment function, which returns a snapshot of the About component
    const { asFragment } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
    />);
    expect(asFragment()).toMatchSnapshot();
  });

  // Third Test
  describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    // Arrange
    const { getByLabelText } = render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
    />);

    // Assert
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
  })

  // Fourth Test
  describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />);
  
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  
  })
})