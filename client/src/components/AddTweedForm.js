import React, { Component } from "react";

class AddTweedForm extends Component {
  render() {
    return (
    <form
        className="add-tweed-form"
        onSubmit={this.props.handleTweedSubmit}
      >
      <input
        type="text"
        value={this.props.newTweedText}
        name="tweed_text"
        placeholder="Add Tweed Here"
        onChange={this.props.handleTextInput}
        /><br/>
    <button className="viewTweed">Add Tweed!</button>
    </form>

    )
  }
}

export default AddTweedForm;
