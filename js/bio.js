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

  openModal(evt, alumni) {
    this.setState({
      'modalOpen': true,
      'selectedBio': alumni
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
        {/*<!-- Classmate Section -->*/}
        <div class="w3-container w3-padding-32" id="about">
          <h2 class="w3-border-bottom w3-border-light-grey w3-padding-16">Classmates</h2>
          <p></p>
        </div>
        <div className="w3-row-padding w3-grayscale">
          { this.props.alumni.map ( (alumni, idx) => {
            return (
              <BioBubble alumni={alumni} key={idx} openModal={this.openModal}/>
            )
          })
          }
        </div>
        <BioModal alumni={this.state.selectedBio} open={this.state.modalOpen} closeModal={this.closeModal}/>
      </span>
    )
  }
}

class BioBubble extends React.Component {
  render() {
    let alumni = this.props.alumni;
    return (
      <div className="w3-col l3 m8 w3-margin-bottom">
        <img  desc={ alumni.image.desc } src={ alumni.image.src } />
        <h5>{ alumni.name.first } { alumni.name.last }</h5>
        <p><button className="w3-button w3-light-grey w3-block" onClick={ (evt) => this.props.openModal(evt, alumni) }> { alumni.name.first }'s Bio</button></p>
      </div>
     )
    }
  }

export default Bios;
export { BioBubble };
