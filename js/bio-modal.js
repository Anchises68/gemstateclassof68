import React from 'react';
import ReactDOM from 'react-dom';


class BioModal extends React.Component {
  render() {
    let bio = this.props.bio;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';
    return (
      <div>
        <!-- About Page -->
        <div id="about" className={"overlay" + modalClass} >

          <div class="popup">

            <!-- Cross Icon to close the popup -->
            <a href="#about-closed">
              <svg className="close" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 288 288" enable-background="new 0 0 288 288" xml:space="preserve">
                <polygon points="288,0 283.8,0 144,139.8 4.2,0 0,0 0,4.2 139.8,144 0,283.8 0,288 4.2,288 144,148.2 283.8,288 288,288 288,283.8
                148.2,144 288,4.2 "/>
              </svg>
            </a>

            <div class="popup-content">

              <!-- profile image -->
              <img className="profile-image" src={this.props.bio.image} alt="Picture" />

              <h1>About Myself</h1>

              <!-- About Myself Paragraph -->
              <p className="about-me">{this.props.bio}</p>

            </div>
            <!-- (.popup-content) End -->

            <a href="#about-closed" className="button"  onClick={this.props.closeModal}>Close</a>

            </div>
            <!-- (.popup) End -->

          </div>
          <!-- (#about) About Page End -->

        </div>
    )
  };
};

export default BioModal;
