import React from "react";
import Layout from "../components/Layout";
import Seo from "./Seo";
import MyPortfolio from "./project_file/myPortfolio";

export default function Project() {
  return (
    <Layout title="Project">
      <div>
        <MyPortfolio />
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title="Project" />;
