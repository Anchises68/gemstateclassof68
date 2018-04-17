import React from 'react';
import PhotoModal from './photo-modal';

class Photos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'photoOpen': false,
      'selectedPhoto': this.props.photo[0]
    };
    this.openPhoto = this.openPhoto.bind(this);
    this.closePhoto = this.closePhoto.bind(this);
  }

  openPhoto(evt, photo) {
    this.setState({
      'photoOpen': true,
      'selectedPhoto': photo
    });
  }

  closePhoto(evt) {
    this.setState({
      'photoOpen': false
    });
  }

  render() {
    return (
      <span>
        {/*Reunion Photos Section */}
        <div class="w3-container w3-padding-32" id="projects">
          <h2 class="w3-border-bottom w3-border-light-grey w3-padding-16">Reunion Photos</h2>
        </div>
        <section>
          <div class="w3-row-padding" >
            { this.props.photo.map ( (photo, idx) => {
              return (
                <PhotoBubble photo={photo} key={idx} openPhoto={this.openPhoto} />
              )
            })
            }
          </div>
        </section>
        <PhotoModal photo={this.state.selectedPhoto} open={this.state.photoOpen} closePhoto={this.closePhoto} />
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
            <button className="w3-button w3-display-bottomright w3-black w3-padding" onClick={ (evt) => this.props.openPhoto(evt, photo)}>Open</button>
            <img src={ photo.image } />
          </div>
        </div>
      )
    }
  }

export default Photos;
export { PhotoBubble };
