import React from "react";
import styled from "styled-components";
import ProjectLayout from "../../components/ProjectLayout";
import { StaticImage } from "gatsby-plugin-image";

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextBox = styled.div`
  width: 70%;
  margin-top: 30px;
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

export default function WC() {
  return (
    <ProjectLayout title="Weather Claus">
      <MainBox>
        <StaticImage src="../../images/wc.png" alt="wc" />
        <TextBox>
          <p>
            날씨 웹사이트 팀 프로젝트입니다.
            <br />
            검색 혹은 위치 동의를 통해 날씨와 옷차림 정보를 확인할 수 있으며
            <br />
            회원가입 유저 한정으로 추가 기능을 제공합니다
          </p>
          <hr />
          <TextSmallBox>
            <div>
              <span>기술스택</span>
              <span>React</span>
              <span>React Query</span>
              <span>Recoil</span>
            </div>
            <div>
              <span>URL</span>
              <a href="https://weather-claus.netlify.app/" target="_blank" />
            </div>
          </TextSmallBox>
        </TextBox>
      </MainBox>
    </ProjectLayout>
  );
}
