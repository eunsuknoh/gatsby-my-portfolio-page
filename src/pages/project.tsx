import React from "react";
import Layout from "../components/Layout";
import Seo from "./Seo";
import MyPortfolio from "./project_file/myPortfolio";
import FLiFLIX from "./project_file/fliflix";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
`;

const Line = styled.div`
  width: 2px;
  height: 200px;
  background-color: white;
  margin: 40px auto;
`;

export default function Project() {
  return (
    <Layout title="Project">
      <Container>
        <MyPortfolio />
        {/* <Line /> */}
        <FLiFLIX />
      </Container>
    </Layout>
  );
}

export const Head = () => <Seo title="Project" />;
