import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Container = styled.div`
  background-color: #1c1c1c;
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
`;

const Main = styled.main`
  border: 1px solid white;
  border-radius: 20px;
  padding: 30px 70px;
  margin-top: 70px;
  box-shadow: white 0px 1px 4px;
  /* box-shadow: white 0px 1px 2px 0px, white 0px 2px 6px 2px; */
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
          </ul>
        </Nav>
        <Main>
          <h1>{title}</h1>
          {children}
        </Main>
      </Container>
    </>
  );
}
