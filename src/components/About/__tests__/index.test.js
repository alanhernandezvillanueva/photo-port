import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../About'

afterEach(cleanup);

describe('About component', () => {
    // First Test
    it('renders', () => {
      render(<About />);
    });
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        // render About
        expect(asFragment()).toMatchSnapshot();
    });
  
    // Second Test
  })


  