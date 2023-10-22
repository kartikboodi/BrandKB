import Header from "../../components/Header";
import { HeaderRanks } from "../../components/Header/HeaderConstants";
import Layout from "../../components/Layout";
import lostEmoji from "../../data/lostEmoji.svg";

import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="PageNotFound">
      <Layout>
        <div className="ErrorCode">
          <span>4</span>
          <img className="lostEmoji" src={lostEmoji} alt="lost emoji" />
          <span>4</span>
        </div>
        <span className="Oops">Oops!</span>
        <Header rank={HeaderRanks.FIRST}>Looks like you're lost</Header>
      </Layout>
    </div>
  );
};

export default PageNotFound;
