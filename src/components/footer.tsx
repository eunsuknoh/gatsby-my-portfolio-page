import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 20px;
  font-weight: 100;
  color: darkgray;
`;

export default function Footer() {
  return (
    <Container>
      <h5>© 2024 eunsukNoh-Portfolio. All rights reserved.</h5>
    </Container>
  );
}
