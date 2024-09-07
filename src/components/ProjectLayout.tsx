import React, { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  /* background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 20px 40px; */
  margin: 0px 40px;
  margin-bottom: 70px;
  h2 {
    display: flex;
    justify-content: center;
    font-size: 30px;
  }
`;

interface IProjectLayoutProps {
  title: string;
  children: ReactNode;
}

export default function ProjectLayout({
  title,
  children,
}: IProjectLayoutProps) {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  );
}
