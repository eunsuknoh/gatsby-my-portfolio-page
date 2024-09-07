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

export default function FLiFLIX() {
  return (
    <ProjectLayout title="FliFLIX">
      <MainBox>
        <StaticImage src="../../images/fliflix1.png" alt="fliflix1" />
        <TextBox>
          <p>
            This is sample explanation.
            <br />
            I'm so excited to make my own project web page.
          </p>
          <hr />
          <TextSmallBox>
            <div>
              <span>기술스택</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>Framer Motion</span>
            </div>
            <div>
              <span>URL</span>
              <a
                href="https://github.com/eunsuknoh/react-fliflix"
                target="_blank"
              />
            </div>
          </TextSmallBox>
        </TextBox>
      </MainBox>
    </ProjectLayout>
  );
}
