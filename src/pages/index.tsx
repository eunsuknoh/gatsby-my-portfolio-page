import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Seo from "./Seo";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { graphql, PageProps } from "gatsby";

const Container = styled.div`
  font-size: 20px;
  margin-top: 40px;
  h2 {
    /* color: lightblue; */
    color: #da7ba9;
  }
`;

const MainBox = styled.div``;

const Section1 = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 70px;
  img {
    object-fit: contain;
    width: fit-content;
    height: 260px;
  }
  p {
    line-height: 1.6em;
    span:first-child {
      font-size: 30px;
      font-weight: 600;
      line-height: 1.5cm;
    }
  }
`;

const FE = styled.span`
  font-size: 21px;
  font-weight: 600;
  /* color: lightblue; */
  color: #39a993;
  /* border-bottom: 2px solid lightblue; */
  border-bottom: 2px solid #39a993;
  padding-bottom: 5px;
  /* box-shadow: 0 4px 6px -6px white; */
`;

const Section2 = styled.div`
  margin: 100px 50px;
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
  background-color: lightblue;
  margin: 40px auto;
`;

const Section3 = styled.div`
  text-align: center;
`;

const Section4 = styled(Section3)``;

export default function IndexPage({ data }: PageProps<Queries.ImageDataQuery>) {
  const img = getImage(data.file?.childImageSharp?.gatsbyImageData!);

  return (
    <Layout title="">
      <Container>
        <MainBox>
          <Section1>
            <GatsbyImage image={img as any} alt="avatar" />
            <p>
              <span>안녕하세요</span>
              <br />
              <FE>아름다움을 선사하고 싶은 프론트엔드 개발자</FE> 노은숙입니다
              <p>
                사용자에게 기능적인 아름다움을 갖춘 UX와
                <br />
                미적인 아름다움이 담긴 UI를 제공하고,
                <br />
                아름다운 코드를 작성하는 개발자를 목표로 합니다
              </p>
            </p>
          </Section1>
          {/* <Line /> */}
          <Section2>
            <h2>Skills</h2>
            <Icons>
              <Icons1>
                <IconBox data-alt="HTML">
                  <StaticImage src="../images/icons/html.png" alt="HTML" />
                </IconBox>
                <IconBox data-alt="CSS">
                  <StaticImage src="../images/icons/css.png" alt="CSS" />
                </IconBox>
                <IconBox data-alt="Javascript">
                  <StaticImage src="../images/icons/js.png" alt="Javascript" />
                </IconBox>
                <IconBox data-alt="Typescript">
                  <StaticImage src="../images/icons/ts.png" alt="Typescript" />
                </IconBox>
                <IconBox data-alt="React">
                  <StaticImage src="../images/icons/react.png" alt="React" />
                </IconBox>
              </Icons1>
              <Icons2>
                <IconBox data-alt="Gatsby">
                  <StaticImage src="../images/icons/gatsby.png" alt="Gatsby" />
                </IconBox>
                <IconBox data-alt="GitHub">
                  <StaticImage src="../images/icons/github.png" alt="GitHub" />
                </IconBox>
                <IconBox data-alt="Slack">
                  <StaticImage src="../images/icons/slack.png" alt="Slack" />
                </IconBox>
                <IconBox data-alt="Notion">
                  <StaticImage src="../images/icons/notion.png" alt="Notion" />
                </IconBox>
              </Icons2>
            </Icons>
          </Section2>
          {/* <Line /> */}
          <Section3>
            <h2>Projects</h2>
          </Section3>
          <Section4>
            <h2>Contacts</h2>
          </Section4>
        </MainBox>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query ImageData {
    file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export const Head = () => <Seo title="" />;
