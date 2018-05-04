// React dependencies
  import React, { Component } from 'react';

// Vendor dependencies
  import styled from 'styled-components';

// Custom Dependencies
  import theme from '../../util/theme';


class MainInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.name,
      displayname: this.props.channelName,
      strategy: "",
      status: "1",
      leadquality: "1",
      impact: "1",
      cost: "1",
      effort: "1",
      likelyhood: "1",
      timeframe: "1",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value}, () => {
      this.props.computeScore(this.state);
    });   
    console.log(this.state); 
  }

  handleSubmit() {
    console.log("submit handled");
  }

  render() {
    return ( 
      <Container>        
          <label>{this.state.displayname}</label>
          <input type="text" name="strategy" value={this.state.strategy} onChange={this.handleChange} />
          {/* Status */}
          <select name="status" value={this.state.status} onChange={this.handleChange}>
            <option value="1">1 - Idea</option>
            <option value="2">2 - Testing</option>
            <option value="3">3 - Tested</option>
            <option value="4">4 - Focusing</option>
            <option value="5">5 - Abandoned</option>
          </select>
          {/* Lead Quality */}
          <select name="leadquality" value={this.state.leadquality} onChange={this.handleChange}>
            <option value="1">1 - High</option>
            <option value="2">2 - Good</option>
            <option value="3">3 - Okay</option>
            <option value="4">4 - Low</option>
            <option value="5">5 - Bad</option>
          </select>
          {/* Impact */}
          <select name="impact" value={this.state.impact} onChange={this.handleChange}>
            <option value="1">1 - High</option>
            <option value="2">2 - Medium</option>
            <option value="3">3 - Low</option>
          </select>
          {/* Cost */}
          <select name="cost" value={this.state.cost} onChange={this.handleChange}>
            <option value="1">1 - High</option>
            <option value="2">2 - Medium</option>
            <option value="3">3 - Low</option>
          </select>
          {/* Effort */}
          <select name="effort" value={this.state.effort} onChange={this.handleChange}>
            <option value="1">1 - High</option>
            <option value="2">2 - Medium</option>
            <option value="3">3 - Low</option>
          </select>
          {/* Likelyhood */}
          <select name="likelyhood" value={this.state.likelyhood} onChange={this.handleChange}>
            <option value="1">1 - High</option>
            <option value="2">2 - Medium</option>
            <option value="3">3 - Low</option>
          </select>
          {/* Timeframe */}
          <select name="timeframe" value={this.state.timeframe} onChange={this.handleChange}>
            <option value="1">1 - 1 Week</option>
            <option value="2">2 - 2 weeks</option>
            <option value="3">3 - 1 month</option>
            <option value="4">4 - 2-3 months</option>
            <option value="5">5 - 4-6 months</option>
            <option value="6">6 - 6 months + </option>
          </select>
      </Container>
    );
  }

}

export default MainInputs;

const Container = styled.div`
  padding: 20px;
`;

const Tips = styled.div`
  text-align: center;
  font-style: italic;
`;
