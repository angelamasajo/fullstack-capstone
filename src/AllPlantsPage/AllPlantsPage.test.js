import React from 'react'
import ReactDOM from 'react-dom'
import AllPlantsPage from './AllPlantsPage'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AllPlantsPage />, div);
  ReactDOM.unmountComponentAtNode(div);
})