import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import VerticalTabs from "../../components/VerticalTabs";
import { PAGE_HEADERS } from "../../data/appConstants";
import BackEnd from "./components/BackEnd";
import CodingLanguages from "./components/CodingLanguages";
import Database from "./components/Database";
import FrontEnd from "./components/FrontEnd";
import Tools from "./components/Tools";

import "./Skills.css";

const Skills = () => {
  const skillsTabs = {
    Languages: <CodingLanguages />,
    "Front-end": <FrontEnd />,
    "Back-end": <BackEnd />,
    Database: <Database />,
    Tools: <Tools />,
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
