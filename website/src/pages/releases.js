import Layout from "@theme/Layout";
import React from "react";
import { releasesConfig as pageConfig } from "../page-content/releases.config";
import TextWithImage from "../components/blocks/text-with-image";
import TextBlock from "../components/blocks/text-block";

export default function Modeler() {
  return (
    <Layout>
      <TextWithImage config={pageConfig.sectionOne} />
      <TextBlock config={pageConfig.sectionTwo} />
      <TextBlock config={pageConfig.sectionThree} />
    </Layout>
  );
}
