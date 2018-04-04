import React from 'react';
import ReactDOM from 'react-dom';
import Bios from './bio'

const alumniBio = [
  {
    'name': "John Doe",

    'image': {
      'desc': "John Doe Photo",
      'src': "images/sample1.jpg"
    }
  },
  {
    'name': "Bob",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/sample2.jpg"
    }
  },
  {
    'name': "Molly",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/sample3.jpg"
    }
  },
  {
    'name': "Julio",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/sample4.jpg"
    }
  },
  {
    'name': "Pepe",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/sample5.jpg"
    }
  },
  {
    'name': "Sam",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/sample6.jpg"
    }
  },
  {
    'name': "Karl",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/sample7.jpg"
    }
  },
  {
    'name': "Adolf",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/sample8.jpg"
    }
  }
]
ReactDOM.render(<Bios alumni={alumniBio}/>, document.getElementById('bio'));
