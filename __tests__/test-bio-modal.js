import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BioModal from '../js/bio-modal';
import Enzyme from 'enzyme';
Enzyme.configure({adapter: new Adapter()});

const alumniBio = {
    'name': "John Doe",
    'image': {
      'desc': "John Doe Photo",
      'src': "images/sample1.jpg"
    },
    'bio': "All about you"
}


describe("BioModal component", () => {
  let component = shallow(<BioModal example={alumniBio} open={false} />);
  let openComponent = shallow(<BioModal example={alumniBio} open={true} />);

  let anchors = component.find("a");

  it("Should contain a single 'a' element", () => {
    expect(anchors.length).toEqual(1);
  });
  /*haven't been able to make it work yet
  it("Should have the modal class set correctly", () => {
    expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
    expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);

  });*/


});