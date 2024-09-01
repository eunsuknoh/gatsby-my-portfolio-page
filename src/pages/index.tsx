import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "./Seo";
import { graphql, PageProps } from "gatsby";

const Container = styled.div`
  font-size: 20px;
`;

const MainBox = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 60px;
  img {
    width: 350px;
  }
`;

export default function IndexPage({ data }: PageProps<Queries.ImageDataQuery>) {
  return (
    <Layout title="Portfolio">
      <Container>
        <MainBox>
          <p>
            안녕하세요 👋 노은숙입니다
            <br />
            아름다움을 선사하고, 편리함을 제공하고 싶은 프론트엔드 개발자입니다
          </p>
          <GatsbyImage image={img as any} alt="avatar" />
        </MainBox>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query ImageData {
    file(id: { eq: "461a3337-0278-5ba4-be1a-0b553deb5063" }) {
      childrenImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export const Head = () => <Seo title="" />;
