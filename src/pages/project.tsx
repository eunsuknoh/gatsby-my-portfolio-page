import React from "react";
import Layout from "../components/Layout";
import Seo from "./Seo";
import MyPortfolio from "./project_file/myPortfolio";
import FLiFLIX from "./project_file/fliflix";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
`;

export default function Project() {
  return (
    <Layout title="Project">
      <Container>
        <MyPortfolio />
        <FLiFLIX />
      </Container>
    </Layout>
  );
}

export const Head = () => <Seo title="Project" />;
