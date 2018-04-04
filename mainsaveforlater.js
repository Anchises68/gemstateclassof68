import React from 'react';
import ReactDOM from 'react-dom';
import Bios from './bio.js';
console.log("loaded react-dom");


const alumni = [
  {
    'name': "Noreen",
    'image': "./images/sample1.jpg",
    'bio': "Bio info goes here"
  },
  {
    'name': "Noreen",
    'image': "images/sample1.jpg",
    'bio': "Bio info goes here"
  },
  {
    'name': "Noreen",
    'image': "images/sample1.jpg",
    'bio': "Bio info goes here"
  },
]

ReactDOM.render(
  <Bios bio={alumni}/>,
  document.getElementById('bio')


  #############################################
  class Bios extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        'modalOpen': false,
        'selectedBio': this.props.bio[0]
      };

      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    openModal(evt, bio) {
      this.setState({
        'modalOpen': true,
        'selectedBio': bio
      });
    }

    closeModal(evt, bio) {
      this.setState({
        'modalOpen': false
      });
    }
    render() {
      return (
        <span>
          <div class="w3-row-padding w3-grayscale">

            { this.props.bios.map( (bio, idx) => {
              return (
                <Classmates bio={bio} key={idx} openModal={this.openModal}/>
              )
            })
            }

          </div>
          <BioModal bio={this.state.selectedBio}
            open={this.state.modalOpen} closeModal={this.state.closeModal} />
        </span>
      )
    }
  }


  class Classmates extends React.Component {
    render () {
      let bio = this.props.bio;
      return (
          <div>
            <div class="w3-col l3 m6 w3-margin-bottom" >
              <img src={bio.image} style="width:100%" height="400px" />
              <h3>{bio.name}</h3>
                <p><button class="w3-button w3-light-grey w3-block" onClick={ (evt) => this.props.openModal(evt, bio) } >Read More</button></p>
              </div>
            </div>
            )
          }
        }

  export default Bios;
  export { Classmates };
