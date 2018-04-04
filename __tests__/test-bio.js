import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Bios, { BioBubble } from '../js/bio';
import Enzyme from 'enzyme';
Enzyme.configure({adapter: new Adapter()});

const alumniBio = [
  {
    'name': "John Doe",
    'image': {
      'src': "images/sample1.jpg",
      'desc': "John Doe Photo"

    }
  },
  {
    'name': "Bob",
    'image': {
      'src': "images/sample2.jpg",
      'desc': "John Doe Photo"

    }
  }
];

describe("Bios component", () => {
  let component = shallow(<Bios alumni={alumniBio} />);

  it("Should be a 'div' element", () => {
    expect(component.type()).toEqual('div');

  });

  it("Should contain as many children as there are bios", () => {
    expect(component.find("BioBubble").length).toEqual(alumniBio.length);
  })
});

/*haven't gotten it to work yet*/
/*describe("BioBubble component", () => {
  let component = shallow(<BioBubble alumni={alumniBio[1]}/>);
  let images = component.find("img");

  it("Should contain a single 'img' element", () => {
    expect(images.length).toEqual(1);
  })

});*/
