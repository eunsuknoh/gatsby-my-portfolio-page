import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Seo from "./Seo";
import { graphql, PageProps } from "gatsby";

const Container = styled.div`
  font-size: 20px;
  margin-top: 40px;
`;

const MainBox = styled.div``;

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
  }
`;

const FE = styled.span`
  font-size: 21px;
  font-weight: 600;
  color: lightblue;
`;

const Section2 = styled.div`
  margin: 0px 50px;
  margin-top: 70px;
  text-align: center;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  margin-top: 50px;
  img {
    width: 50px;
  }
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 90px;
  &::after {
    content: attr(data-alt);
  }
`;

const Icons1 = styled.div`
  display: flex;
  gap: 20px;
`;
const Icons2 = styled(Icons1)``;

const Line = styled.div`
  width: 2px;
  height: 100px;
  background-color: white;
  margin: 40px auto;
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
              편리함을 제공하고 싶은 <FE>프론트엔드 개발자</FE> 입니다
              <p>
                React와 TS를 주언어로 사용하고 있으며
                <br />
              </p>
            </p>
          </Section1>
          <Line />
          <Section2>
            <h2>Skills</h2>
            <Icons>
              <Icons1>
                <IconBox data-alt="HTML">
                  <StaticImage src="../images/html.png" alt="HTML" />
                </IconBox>
                <IconBox data-alt="CSS">
                  <StaticImage src="../images/css.png" alt="CSS" />
                </IconBox>
                <IconBox data-alt="Javascript">
                  <StaticImage src="../images/js.png" alt="Javascript" />
                </IconBox>
                <IconBox data-alt="Typescript">
                  <StaticImage src="../images/ts.png" alt="Typescript" />
                </IconBox>
                <IconBox data-alt="React">
                  <StaticImage src="../images/react.png" alt="React" />
                </IconBox>
              </Icons1>
              <Icons2>
                <IconBox data-alt="Gatsby">
                  <StaticImage src="../images/gatsby.png" alt="Gatsby" />
                </IconBox>
                <IconBox data-alt="Github">
                  <StaticImage src="../images/github-icon.png" alt="Github" />
                </IconBox>
                <IconBox data-alt="Slack">
                  <StaticImage src="../images/slack.png" alt="Slack" />
                </IconBox>
              </Icons2>
            </Icons>
          </Section2>
          <Line />
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
