import Header from "../Header";
import { HeaderRanks } from "../Header/HeaderConstants";

import "./PageHeader.css";

const PageHeader = ({ title }) => {
  return (
    <div className="page-header">
      <Header rank={HeaderRanks.SECOND}>{title}</Header>
      <hr />
    </div>
  );
};

export default PageHeader;
