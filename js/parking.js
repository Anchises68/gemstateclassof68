import React from 'react';
import PhotoModal from './photo-modal';

class Photos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'modalOpen': false,
      'selectedPhoto': this.props.photo[0]
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(evt, photo) {
    this.setState({
      'modalOpen': true,
      'selectedPhoto': photo
    });
  }

  closeModal(evt) {
    this.setState({
      'modalOpen': false
    });
  }

  render() {
    return (
      <span>
        {/* Reunion Photos Section */}
        <div class="w3-container w3-padding-32" id="projects">
          <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Reunion Photos</h3>
        </div>

        <div class="w3-row-padding">
          { this.props.photo.map ( (photo, idx) => {
            return (
              <PhotoBubble photo={photo} key={idx} />
            )
          })
          }
        </div>
        <PhotoModal photo={this.state.selectedPhoto} open={this.state.modalOpen} closeModal={this.closeModal}/>

      </span>
    )
  }
}

  class PhotoBubble extends React.Component {
    render() {
      let photo = this.props.photo;
      return (
        <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-display-container">
            <button className="w3-display-topleft w3-black w3-padding" onClick={ (evt) => this.props.openModal(evt, photo) }> Larger</button>
            <img src={ photo.image } />
          </div>
        </div>
      )
    }
  }

export default Photos;
export { PhotoBubble };
