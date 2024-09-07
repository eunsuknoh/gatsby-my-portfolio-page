import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 18px;
  color: darkgray;
`;

export default function Footer() {
  return (
    <Container>
      <span>© 2024 &lt;EunsukNoh /&gt;</span>
    </Container>
  );
}
