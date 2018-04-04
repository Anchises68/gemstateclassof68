import React from 'react';


class Bios extends React.Component {
  render() {
    return (
      <div className="w3-row-padding w3-grayscale">
        { this.props.alumni.map ( (example, idx) => {
          return (
            <BioBubble example={example} key={idx} />
          )
        })
        }
      </div>
    )
  }
}

class BioBubble extends React.Component {
  render() {
    let example = this.props.example;
    return (
      <div className="w3-col l3 m6 w3-margin-bottom">
        <img  desc={ example.image.desc } src={ example.image.src } />
        <h3>{ example.name }</h3>
        <p><button className="w3-button w3-light-grey w3-block">Read { example.name }'s Bio</button></p>
      </div>
     )
    }
  }

export default Bios;
export { BioBubble };
