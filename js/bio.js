import React from 'react';
import BioModal from './bio-modal';


class Bios extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'modalOpen': false,
      'selectedBio': this.props.alumni[0]
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(evt, example) {
    this.setState({
      'modalOpen': true,
      'selectedBio': example
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
        <div className="w3-row-padding w3-grayscale">
          { this.props.alumni.map ( (example, idx) => {
            return (
              <BioBubble example={example} key={idx} openModal={this.openModal}/>
            )
          })
          }
        </div>

        <BioModal example={this.state.selectedBio} open={this.state.modalOpen} closeModal={this.closeModal}/>
      </span>
    )
  }
}

class BioBubble extends React.Component {
  render() {
    let example = this.props.example;
    return (
      <div className="w3-col l2 m6 w3-margin-bottom">
        <img  desc={ example.image.desc } src={ example.image.src } />
        <h4>{ example.name }</h4>
        <p><button className="w3-button w3-light-grey w3-block" onClick={ (evt) => this.props.openModal(evt, example) } >Read { example.name }'s Bio</button></p>
      </div>
     )
    }
  }

export default Bios;
export { BioBubble };
