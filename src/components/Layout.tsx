import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "./footer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Container = styled.div`
  position: relative;
  background-color: #13171f;
  color: white;
  position: relative;
  max-width: 100vw;
  height: 100vh;
  padding: 100px 250px;
`;

const Nav = styled.nav`
  position: absolute;
  top: 50px;
  right: 200px;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
  }
  li {
    list-style: none;
    a {
      color: white;
      text-decoration: none;
      font-weight: 600;
      font-size: 20px;
      transition: all 0.4s;
    }
    a:hover {
      box-shadow: inset 0 -1px 0 0;
    }
  }
  li:last-child {
    a:hover {
      box-shadow: none;
    }
  }
  img {
    width: 30px;
  }
`;

const Main = styled.main`
  border: 1px solid white;
  border-radius: 20px;
  padding: 30px 70px;
  margin-top: 70px;
  box-shadow: white 0px 1px 4px;
  /* box-shadow: white 0px 1px 2px 0px, white 0px 2px 6px 2px; */
`;

const FooterBox = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
`;

interface ILayoutProps {
  title: string;
  children: any;
}

export default function Layout({ title, children }: ILayoutProps) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Nav>
          <ul>
            <li>
              <Link to="/">About me</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <a href="https://github.com/eunsuknoh" target="_blank">
                <StaticImage
                  src="../images/github-icon.png"
                  alt="github-icon"
                />
              </a>
            </li>
          </ul>
        </Nav>
        <Main>
          <h1>{title}</h1>
          {children}
        </Main>
        <FooterBox>
          <Footer />
        </FooterBox>
      </Container>
    </>
  );
}
