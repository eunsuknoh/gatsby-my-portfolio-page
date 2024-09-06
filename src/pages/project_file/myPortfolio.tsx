import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0px 40px;
  h2 {
    display: flex;
    justify-content: center;
    font-size: 30px;
  }
`;

const MainBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TextBox = styled.div`
  margin-left: 100px;
  p {
    line-height: 1.5em;
  }
  hr {
    margin: 30px 0px;
  }
`;

const TextSmallBox = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2em;
  gap: 20px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
    span:first-child {
      margin-right: 20px;
    }
    span:not(:first-child) {
      font-size: 15px;
      color: lightblue;
      border: 1px solid lightblue;
      border-radius: 10px;
      padding: 1px 9px;
    }
  }
  a::after {
    content: attr(href);
  }
  a {
    color: lightblue;
    text-decoration: none;
    transition: all 0.4s;
  }
  a:hover {
    color: #3aaed9;
  }
`;

export default function MyPortfolio() {
  return (
    <Container>
      <h2>포트폴리오 사이트</h2>
      <MainBox>
        <StaticImage src="/images/portfolio.png" alt="portfolio" width={200} />
        <span>sample image</span>
        <TextBox>
          <p>
            지금 보고 계신 사이트로,
            <br />
            정적페이지 생성의 유용한 Gatsby 프레임워크를 사용하여 제작하였습니다
            <br />
            메인 화면의 아바타나 아이콘 이미지를
            <br />
            업로드 하는 데에 있어 문제가 있었습니다만
          </p>
          <hr />
          <TextSmallBox>
            <div>
              <span>기술스택</span>
              <span>Gatsby</span>
              <span>TypeScript</span>
              <span>styled-components</span>
            </div>
            <div>
              <span>URL</span>
              <a
                href="https://github.com/eunsuknoh/gatsby-my-portfolio-page"
                target="_blank"
              />
            </div>
          </TextSmallBox>
        </TextBox>
      </MainBox>
    </Container>
  );
}
