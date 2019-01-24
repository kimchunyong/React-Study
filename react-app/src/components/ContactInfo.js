import React, { Component } from "react";

class contactInfo extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.contact.name} {this.props.contact.phone}
        </div>
      </div>
    );
  }
}

export default contactInfo;
