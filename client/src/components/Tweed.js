import React, {Component} from 'react';

class Tweed extends Component {
  render() {
    return (
      <div className="single">
        <div id="tweedContent">
          {this.props.singleTweed.tweed_text}
        </div>
         <form id={this.props.iden}
        className="view-tweed-form"
        onSubmit={this.props.handleSingleTweed}
        >
        <button className="viewTweed">View Tweed</button>
        </form>
      </div>
    )
  }
}

export default Tweed;
