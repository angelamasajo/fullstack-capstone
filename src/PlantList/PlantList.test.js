import React from 'react'
import ReactDOM from 'react-dom'
import PlantList from './PlantList'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlantList />, div);
  ReactDOM.unmountComponentAtNode(div);
})