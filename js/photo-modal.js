import React from 'react';

class PhotoModal extends React.Component {
  render () {
    let photo = this.props.photo;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

    return (
      <div className={ "overlay " + modalClass }>
        <div className="popup">
          <div className="photo-popup-content">
            <img src={ photo.image } className="reunion-image"/>
          </div>
          <a className="button w3-button w3-light-grey" onClick={ this.props.closePhoto }>Close</a>
        </div>
      </div>
    )
  };
};

export default PhotoModal;
