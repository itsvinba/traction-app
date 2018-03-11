// React dependencies
  import React, { Component } from 'react';

// Vendor dependencies
  import styled from 'styled-components';

// Custom Dependencies
  import Navbar from './components/nav-bar';
  import theme from './util/theme';
  import MainTable from './components/maintable/index';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Title>The Bullseye Traction Strategy</Title>
        <MainTable />
      </div>
    );
  }
}

export default App;

const Title = styled.h3`
  padding: 20px;
`;

