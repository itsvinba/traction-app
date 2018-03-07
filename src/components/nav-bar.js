// React dependencies
  import React, { Component } from 'react';

// Vendor dependencies
  import styled from 'styled-components';

// Custom Dependencies
  import theme from '../util/theme';

class Navbar extends Component {
  render() {
    return (
      <Container>
        <div>
          <ul>
            <li><Logotext>Traction.io</Logotext></li>
          </ul>
        </div>
      </Container>
    );
  }
}

export default Navbar;

// Styled components
  const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: ${theme.lightGrey.hex};
    padding: 30px;
  `;  

  const Logotext = styled.h3`
    margin: 0px;
  `;