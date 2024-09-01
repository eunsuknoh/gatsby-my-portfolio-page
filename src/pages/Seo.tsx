import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface ISeoProps {
  title: string;
}

export default function Seo({ title }: ISeoProps) {
  const data = useStaticQuery<Queries.PageTitleQuery>(graphql`
    query PageTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {title
        ? `${data.site?.siteMetadata?.title} | ${title}`
        : data.site?.siteMetadata?.title}
    </title>
  );
}
