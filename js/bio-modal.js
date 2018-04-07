import React from 'react';




class BioModal extends React.Component {

  render () {
    let example = this.props.example;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

    return (
      <div className={ "overlay " + modalClass }>
        <div className="popup">


          <div className="popup-content">
            <img src={ example.image.src } className="profile-image"/>

            <h1 >About { example.name }</h1>
            <p className="about-me">{ example.bio }</p>

          </div>
          <a className="button w3-button w3-light-grey" onClick={ this.props.closeModal }>Close</a>
          </div>
        </div>
    )
  };
};

export default BioModal;
