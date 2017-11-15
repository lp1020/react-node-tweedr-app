import React, { Component } from 'react';
import axios from 'axios';
import TweedList from './components/TweedList';
import AddTweedForm from './components/AddTweedForm';
import SingleTweed from './components/SingleTweed';
import logo from './tweeder.jpg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tweeds:[],
      newTweedText: '',
      singleTweed: {},
      singleExists: false,
    }
  this.handleTextInput = this.handleTextInput.bind(this);
  this.handleTweedSubmit = this.handleTweedSubmit.bind(this);
  this.handleSingleTweed = this.handleSingleTweed.bind(this);
  }

  componentDidMount() {
    axios('http://localhost:3001/api/tweeds')
      .then(res => {
        this.setState(prevState => {
          console.log(res.data);
          return {
            tweeds: res.data.data.tweeds,
          }
        });
    });
  }

  handleTextInput(event) {
    this.setState({
      newTweedText: event.target.value
    })
  }

  handleTweedSubmit(event) {
    // event.preventDefault();
    axios.post('http://localhost:3001/api/tweeds', {
      tweed: this.state.newTweedText,
    })
    .then(res => {
      console.log(res.data);
      {
        const newTweed = {
          tweed: res.data.tweed.tweed_text,
        }
        console.log(newTweed)
        this.setState((prevState) => {
          return {
            tweeds: prevState.tweeds.concat(newTweed)
          }
        })
        console.log('-----> is this being reached')
      }
    }).catch(err => console.log(err));
  }

handleSingleTweed(ev) {
  ev.preventDefault();
    console.log(ev.target.id);
    console.log(`http://localhost:3001/api/tweeds/${ev.target.id}`)
    axios(`http://localhost:3001/api/tweeds/${ev.target.id}`)
      .then(res => {
        this.setState(prevState => {
          console.log(res.data);
          return {
            singleTweed: res.data.data.tweed,
            singleExists: true,
          }
        });
    });
  }

  render() {
    console.log('APP rendering', this.state);

    if (this.state.singleExists) {
      return(
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
              <h1>
                Welcome to LSDevs Tweedr App
              </h1>
            </div>
            <SingleTweed single={this.state.singleTweed} />
            <footer>
              <div id="footer">
                <div id="footerMessage">Site put together by the <span id="devName"> {this.props.devs}
              </span>!!</div>
              </div>
            </footer>
        </div>
      )
    }
    return (
      <div className="App">
        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to LSDevs Tweedr App</h1>
        </div>
        <div id="innerApp">
          <AddTweedForm
        handleTextInput={this.handleTextInput}
        handleTweedSubmit={this.handleTweedSubmit}
        newTweedText={this.state.newTweedText}
      />
      <TweedList
        data={this.state.tweeds}
        handleSingleTweed={this.handleSingleTweed}
      />
        </div>
        <footer>
          <div id="footer">
            <div id="footerMessage">Site put together by the <span id="devName"> {this.props.devs}
            </span>!!</div>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
