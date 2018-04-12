import React from 'react';

class BioModal extends React.Component {
  render () {
    let alumni = this.props.alumni;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

    return (
      <div className={ "overlay " + modalClass }>
        <div className="popup">
          <div className="popup-content">
            <img src={ alumni.image.src } className="profile-image"/>
            <h1 >About { alumni.name }</h1>
            <p className="about-me">{ alumni.bio }</p>
          </div>
          <a className="button w3-button w3-light-grey" onClick={ this.props.closeModal }>Close</a>
          </div>
        </div>
    )
  };
};

export default BioModal;
