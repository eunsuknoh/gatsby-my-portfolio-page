import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Seo from "./Seo";
import { graphql, PageProps } from "gatsby";

const Container = styled.div`
  font-size: 20px;
`;

const MainBox = styled.div`
  margin-top: 40px;
`;

const Section1 = styled.div`
  display: flex;
  justify-content: space-around;
  img {
    object-fit: contain;
    width: fit-content;
    height: 250px;
  }
  p {
    line-height: 1.5em;
    span:first-child {
      font-size: 25px;
      font-weight: 600;
      line-height: 1.5cm;
    }
    span:last-child {
      font-size: 21px;
      font-weight: 600;
      color: lightblue;
    }
  }
`;

const Section2 = styled.div`
  margin: 0px 50px;
  margin-top: 70px;
`;

const Icons = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 50px;
  img {
    width: 50px;
  }
`;

export default function IndexPage({ data }: PageProps<Queries.ImageDataQuery>) {
  const img = getImage(data.file?.childImageSharp?.gatsbyImageData!);

  return (
    <Layout title="Portfolio">
      <Container>
        <MainBox>
          <Section1>
            <GatsbyImage image={img as any} alt="avatar" />
            <p>
              <span>안녕하세요 🐋 노은숙입니다</span>
              <br />
              사용자에게 아름다움을 선사하고
              <br />
              편리함을 제공하고 싶은 <span>프론트엔드 개발자</span> 입니다
            </p>
          </Section1>
          <Section2>
            <h2>Skills</h2>
            <Icons>
              <StaticImage src="../images/html.png" alt="html" />
              <StaticImage src="../images/css.png" alt="css" />
              <StaticImage src="../images/js.png" alt="js" />
              <StaticImage src="../images/ts.png" alt="ts" />
              <StaticImage src="../images/react.png" alt="react" />
              <StaticImage src="../images/github-icon.png" alt="github-icon" />
              <StaticImage src="../images/slack.png" alt="slack" />
              <StaticImage src="../images/gatsby.png" alt="gatsby" />
            </Icons>
          </Section2>
        </MainBox>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query ImageData {
    file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export const Head = () => <Seo title="" />;
