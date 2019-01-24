import React, { Component } from "react";
import ContactInfo from "./ContactInfo";

class Contact extends Component {
  state = {
    keyword: "",
    contactData: [
      {
        name: "Abet",
        phone: "010-0000-0001"
      },
      {
        name: "Betty",
        phone: "010-0000-0002"
      },
      {
        name: "Charlie",
        phone: "010-0000-0003"
      },
      {
        name: "David",
        phone: "010-0000-0004"
      }
    ]
  };

  handleChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  render() {
    const { contactData } = this.state;
    const mapToComponents = data => {
      return data.map((contact, i) => {
        return <ContactInfo contact={contact} key={i} />;
      });
    };

    return (
      <div>
        <h1>Contacts</h1>
        <input
          name="keyword"
          placeholder="Search"
          value={this.state.keyword}
          onChange={this.handleChange}
        />
        <div>{mapToComponents(this.state.contactData)}</div>
      </div>
    );
  }
}

export default Contact;
