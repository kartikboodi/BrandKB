import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import { PAGE_HEADERS } from "../../data/appConstants";

import "./Skills.css";

const Skills = () => {
  return (
    <Layout>
      <PageHeader title={PAGE_HEADERS.SkillSet} />
    </Layout>
  );
};

export default Skills;
