import React from "react";
import styled, { ThemeProvider} from "styled-components";
import { Box } from 'reas'

const OuterWrapper = styled.div`
  padding: 4em;
  background: ${props => props.theme.background};
`;

const InnerWrapper = styled.div`
  padding: 2em;

  // This works on server but not client
  ${OuterWrapper} + * & {
    background: palevioletred;

    h1 {
      color: papayawhip;
    }
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App = () => (
  <ThemeProvider theme={{
      background: "blue"
  }}>
    <div>
    <OuterWrapper>
      <InnerWrapper>
        <Title>Hello World, this is my first styled component!</Title>
      </InnerWrapper>
    </OuterWrapper>
    <div>
      <InnerWrapper>
        <Title>Hello World, this is my first styled component!</Title>
      </InnerWrapper>
      <Box backgroundColor="palevioletred" color="white">Box</Box>
    </div>
    </div>
  </ThemeProvider>
);

export default App