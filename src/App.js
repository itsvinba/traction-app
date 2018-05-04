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
    for (var key in channelData) {
      switch(key) {
        case "leadquality":
          score += (channelData.leadquality * 0.2);
          break;
        case "impact":
          score += (channelData.impact * 0.34);
          break;
        case "cost":
          score += (channelData.cost * 0.34);
          break;
        case "effort":
          score += (channelData.effort * 0.34);
          break;
        case "likelyhood":
          score += (channelData.likelyhood * 0.34);
          break;
        case "timeframe":
          score += (channelData.timeframe * 0.17);
          break;
      }
    }

    this.setState({[channelData.id]:score}, ()=> {
      console.log(this.state);
      window.state = this.state;
    });    
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
          <ChannelInput name="targetingblogs" channelName="Targeting Blogs" computeScore={this.computeScore}/>
          <ChannelInput name="publicity" channelName="Publicity" computeScore={this.computeScore}/>
          <ChannelInput name="unconventionalpr" channelName="Unconventional PR" computeScore={this.computeScore}/>
          <ChannelInput name="sem" channelName="Search Engine Marketing (SEM)" computeScore={this.computeScore}/>
          <ChannelInput name="socialdisplayads" channelName="Social and Display Ads" computeScore={this.computeScore}/>
          <ChannelInput name="offlineads" channelName="Offline Ads" computeScore={this.computeScore}/>
          <ChannelInput name="seo" channelName="Search Engine Optimization (SEO)" computeScore={this.computeScore}/>
          <ChannelInput name="contentmarkeing" channelName="Content Marketing" computeScore={this.computeScore}/>
          <ChannelInput name="emailmarketing" channelName="Email Marketing" computeScore={this.computeScore}/>
          <ChannelInput name="viralmarketing" channelName="Viral Marketing" computeScore={this.computeScore}/>
          <ChannelInput name="engasmarketing" channelName="Engineering as Marketing" computeScore={this.computeScore}/>
          <ChannelInput name="bd" channelName="Business Development" computeScore={this.computeScore}/>
          <ChannelInput name="sales" channelName="Sales" computeScore={this.computeScore}/>
          <ChannelInput name="affliate" channelName="Affliate Programs" computeScore={this.computeScore}/>
          <ChannelInput name="existingplatform" channelName="Existing Platform" computeScore={this.computeScore}/>
          <ChannelInput name="tradeshows" channelName="Trade Shows" computeScore={this.computeScore}/>
          <ChannelInput name="offlineevents" channelName="Offline Events" computeScore={this.computeScore}/>
          <ChannelInput name="speakingengagements" channelName="Speaking Engagements" computeScore={this.computeScore}/>
          <ChannelInput name="community" channelName="Community Building" computeScore={this.computeScore}/>
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

