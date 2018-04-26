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
          <p>Click on any photo for larger view.  You can download the files by clicking <a href="https://drive.google.com/open?id=1QpeccGdj8AIvo46BnkyA_3RJpzOJ4S67" target="_blank">here</a></p>
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
        <div className="w3-col l3 m4 w3-margin-bottom">
          <div className="w3-display-container">

            <img src={ photo.image } onClick={ (evt) => this.props.openPhoto(evt, photo)} className="w3-button"/>
          </div>
        </div>
      )
    }
  }

export default Photos;
export { PhotoBubble };
