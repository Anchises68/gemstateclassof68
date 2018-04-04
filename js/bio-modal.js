import React from 'react';
import ReactDOM from 'react-dom';


className BioModal extends React.Component {
  render() {
    return (
      <div id="about" className="overlay">

        <div className="popup">

          <!-- Cross Icon to close the popup -->
          <a href="#about-closed">
            <svg className="close" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 288 288" enable-background="new 0 0 288 288" xml:space="preserve" >
              <polygon points="288,0 283.8,0 144,139.8 4.2,0 0,0 0,4.2 139.8,144 0,283.8 0,288 4.2,288 144,148.2 283.8,288 288,288 288,283.8
              148.2,144 288,4.2 " />
            </svg>
          </a>

          <div className="popup-content">

            <!-- profile image -->
            <img className="profile-image" src="img/profile.png" alt="Picture" />

            <h1>About Myself</h1>

            <!-- About Myself Paragraph -->
            <p className="about-me">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.</p>

          </div>
          <!-- (.popup-content) End -->

          <a href="#about-closed" className="button">Close</a>

        </div>
        <!-- (.popup) End -->
      </div>
    )
  };
};

export default BioModal;
