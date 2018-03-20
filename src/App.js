// React dependencies
  import React, { Component } from 'react';

// Vendor dependencies
  import styled from 'styled-components';

// Custom Dependencies
  import Navbar from './components/nav-bar';
  import theme from './util/theme';
  import ChannelInput from './components/channelinput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  computeScore = (channelData) => {
    var score = 0;
    
    this.setState({[channelData.id]:score});
  };

  handleSubmit() {
    console.log("submit handled");
  }

  render() {
    return (
      <div>
        <Navbar />
        <Title>The Bullseye Traction Strategy</Title>
        <form onSubmit={this.handleSubmit}>
          <ChannelInput name="bd" channelName="Business Development" computeScore={this.computeScore}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;

const Title = styled.h3`
  padding: 20px;
`;

