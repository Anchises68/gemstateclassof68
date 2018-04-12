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

    },
    'bio': "All about you"
  },
  {
    'name': "Bob",
    'image': {
      'src': "images/sample2.jpg",
      'desc': "John Doe Photo"
    },
    'bio': "All about you"
  }
];

describe("Bios component", () => {
  let component = shallow(<Bios alumni={alumniBio} />);

  it("Should be a 'span' element", () => {
    expect(component.type()).toEqual('span');
  });

  it("Should contain as many children as there are bios", () => {
    expect(component.find("BioBubble").length).toEqual(alumniBio.length);
  });

  it("Should allow modal to open and close", () => {
    component.instance().openModal();
    expect(component.instance().state.modalOpen).toBe(true);
    component.instance().closeModal();
    expect(component.instance().state.modalOpen).toBe(false);
  })
});

describe("BioBubble component", () => {
  let mockOpenModalFn = jest.fn();
  let component = shallow(<BioBubble alumni={alumniBio[1]} openModal={mockOpenModalFn} />);
  let images = component.find("img");

  it("Should contain a single 'img' element", () => {
    expect(images.length).toEqual(1);
  });

  it("Should call the openModal handler when clicked", () => {
    component.find(".w3-button").simulate('click');
    expect(mockOpenModalFn).toHaveBeenCalled();
  })

});
