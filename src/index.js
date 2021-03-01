import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const FILES = [
  {
    "name": "Monstera Deliciosa",
    "plantType": "Tropical",
    "toxicity": "Toxic",
    "careDetails": "Here's the care detail for the monstera"
  },
  {
    "name": "Monstera Adansonii",
    "plantType": "Tropical",
    "toxicity": "Toxic",
    "careDetails": "Here's the care detail for the monstera adansonii"
  },
  {
    "name": "Christmas Cactus",
    "plantType": "Holiday",
    "toxicity": "Non-toxic",
    "careDetails": "Here's the care detail for the christmas cactus"
  },
  {
    "name": "Golden Pothos",
    "plantType": "Trailing",
    "toxicity": "Toxic",
    "careDetails": "Here's the care detail for the golden pothos"
  },
];

ReactDOM.render(
<BrowserRouter>
  <App files={FILES}/>
</BrowserRouter>, 
document.getElementById('root')
);