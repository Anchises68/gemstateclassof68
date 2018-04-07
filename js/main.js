import React from 'react';
import ReactDOM from 'react-dom';
import Bios from './bio';

const alumniBio = [
  {
    'name': "John Doe",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/team1.jpg"
    },
    'bio': "put in bio right here"
  },
  {
    'name': "Bob",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/team2.jpg"
    },
    'bio': "All about you"
  },
  {
    'name': "Molly",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/team3.jpg"
    },
    'bio': "All about you"
  },
  {
    'name': "Julio",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/team4.jpg"
    },
    'bio': "All about you"
  },
  {
    'name': "Pepe",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/sample6.jpg"

    },
    'bio': "lorem ipsum"
  },
  {
    'name': "Sam",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/sample7.jpg"
    },
    'bio': "All about you"
  },
  {
    'name': "Karl",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/sample8.jpg"
    }
  },
  {
    'name': "Adolf",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/sample1.jpg"
    },
    'bio': "All about you"
  }
]
ReactDOM.render(<Bios alumni={alumniBio}/>, document.getElementById('bio'));
