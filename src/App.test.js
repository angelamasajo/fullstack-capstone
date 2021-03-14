// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import PlantContext from './PlantContext'

it('renders without crashing', () => {
  const div = document.createElement('div');

  const value = {
    plantData: [],
    addPlant: () => {}
  }
  
  ReactDOM.render(<PlantContext.Provider value={value}/>, div);
  ReactDOM.unmountComponentAtNode(div);
}) 