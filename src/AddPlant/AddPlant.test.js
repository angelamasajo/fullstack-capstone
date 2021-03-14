import React from 'react'
import ReactDOM from 'react-dom'
import AddPlant from './AddPlant';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddPlant />, div);
  ReactDOM.unmountComponentAtNode(div);
})