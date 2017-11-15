import React, {Component} from 'react';
import Tweed from './Tweed';

class TweedList extends Component {
  render() {
    return (
      <div id="tweedList">
        {this.props.data.map(tweed => {
          return <Tweed
            singleTweed={tweed}
            iden={tweed.id}
            key={tweed.id}
            handleSingleTweed={this.props.handleSingleTweed} />
        })}
        <div>

        </div>

      </div>
    )
  }
}

export default TweedList;
