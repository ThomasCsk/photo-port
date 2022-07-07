import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '../index'

afterEach(cleanup);

const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};

