import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Photos, { PhotoBubble } from '../js/photo';
import Enzyme from 'enzyme';
Enzyme.configure({adapter: new Adapter()});

const alumniAlbum = [
  {
    'image': "images/house2.jpg"
  },
  {
    'image': "images/house3.jpg"
  }
];

describe("Photo component", () => {
  let component = shallow(<Photos photo={alumniAlbum} />);

  it("Should be a 'span' element", () => {
    expect(component.type()).toEqual('span');
  });

  it("Should contain as many children as there are photos", () => {
    expect(component.find("PhotoBubble").length).toEqual(alumniAlbum.length);
  });

  it("Should allow modal to open and close", () => {
    component.instance().openPhoto();
    expect(component.instance().state.photoOpen).toBe(true);
    component.instance().closePhoto();
    expect(component.instance().state.photoOpen).toBe(false);
  })
});

describe("PhotoBubble component", () => {
  let mockOpenModalFn = jest.fn();
  let component = shallow(<PhotoBubble photo={alumniAlbum[1]} openPhoto={mockOpenModalFn} />);
  let images = component.find('img');

  it("Should contain a single 'img' element", () => {
    expect(images.length).toEqual(1);
  });

  it("Should call the openPhoto handler when clicked", () => {
    component.find(".w3-button").simulate('click');
    expect(mockOpenModalFn).toHaveBeenCalled();
  });

  it ("Should color the picture frame when hovering", () => {
    component.find(".w3-display-container").simulate('hover');
    expect(mockOpenModalFn).toHaveBeenCalled();

  });
});
