import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Container = styled.div`
  font-size: 20px;
`;

export default function IndexPage() {
  return (
    <Layout title="Portfolio">
      <Container>
        <p>Hello this is eunsuk Noh</p>
        <StaticImage src="src/images/avatar.png" alt="avatar" />
      </Container>
    </Layout>
  );
}
