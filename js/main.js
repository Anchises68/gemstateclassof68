import React from 'react';
import ReactDOM from 'react-dom';
import Bios from './bio.js';


const alumni = [
  {
    'name': "Noreen",
    'image': "./images/sample1.jpg",
    'bio': "Bio info goes here"
  },
  {
    'name': "Noreen",
    'image': "images/sample1.jpg",
    'bio': "Bio info goes here"
  },
  {
    'name': "Noreen",
    'image': "images/sample1.jpg",
    'bio': "Bio info goes here"
  },
]

ReactDOM.render(
  <Bios bio={alumni}/>,
  document.getElementById('bio');
