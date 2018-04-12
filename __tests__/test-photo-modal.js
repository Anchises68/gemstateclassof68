import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhotoModal from '../js/photo-modal';
import Enzyme from 'enzyme';
Enzyme.configure({adapter: new Adapter()});

const alumniAlbum = {
    'image': "images/house2.jpg"
  }

  describe ("PhotoModal component", () => {
    let component = shallow(<PhotoModal photo={alumniAlbum} open={false} />);
    let openComponent = shallow(<PhotoModal photo={alumniAlbum} open={true} />);

    it("Should have the modal class set correctly", () => {
      expect(component.find(".overlay").hasClass("modal--closed")).toBe(true);
      expect(openComponent.find(".overlay").hasClass("modal--open")).toBe(true);
    });
  });
