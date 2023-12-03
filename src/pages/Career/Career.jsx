import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import { PAGE_HEADERS } from "../../data/appConstants";

import "./Career.css";

const Career = () => {
  return (
    <Layout>
      <PageHeader title={PAGE_HEADERS.Experience} />
    </Layout>
  );
};

export default Career;
