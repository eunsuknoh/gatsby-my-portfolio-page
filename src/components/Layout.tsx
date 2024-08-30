import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Container = styled.div`
  background-color: #272829;
  width: 100vw;
  height: 100vh;
  margin: 0;
  max-height: fit-content;
`;

interface ILayoutProps {
  title: string;
  children: any;
}

export default function Layout({ title, children }: ILayoutProps) {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to="/">About me</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{title}</h1>
        {children}
      </main>
    </Container>
  );
}
