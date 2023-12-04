import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import VerticalTabs from "../../components/VerticalTabs";
import { PAGE_HEADERS } from "../../data/appConstants";
import CodingLanguages from "./components/CodingLanguages";

import "./Skills.css";

const Skills = () => {
  const skillsTabs = {
    Languages: <CodingLanguages />,
    Web: "Web Technologies",
    Database: "Database",
    Automation: "Automation",
    Tools: "Tools",
  };

  return (
    <Layout>
      <div className="skills-page">
        <PageHeader title={PAGE_HEADERS.SkillSet} />
        <VerticalTabs tabs={skillsTabs} />
      </div>
    </Layout>
  );
};

export default Skills;
