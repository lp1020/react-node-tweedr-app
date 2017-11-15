import React, {Component} from 'react';

class SingleTweed extends Component {
  render() {
    return (
      <div id="solo">
        {this.props.single.tweed_text}

      </div>
    )
  }
}

export default SingleTweed
