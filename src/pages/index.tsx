import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const Container = styled.div`
  font-size: 20px;
`;

export default function IndexPage() {
  return (
    <Layout title="Portfolio">
      <Container>Welcome to my portfolio page 👩‍💻</Container>
    </Layout>
  );
}
