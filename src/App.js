import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Column } from "./components/Flex";

const Container = styled(Column)`
  margin: 0 auto;
  padding: 0 8px;
  max-width: 800px;
`;

function App() {
  return (
    <>
      <Navbar />

      <Container></Container>
    </>
  );
}

export default App;
