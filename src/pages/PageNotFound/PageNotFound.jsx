import Header from "../../components/Header";
import { HeaderRanks } from "../../components/Header/HeaderConstants";
import lostEmoji from "../../data/sadFaceEmoji.svg";

import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="PageNotFound">
      <div className="ErrorCode">
        <span>4</span>
        <img className="lostEmoji" src={lostEmoji} alt="lost emoji" />
        <span>4</span>
      </div>
      <span className="Oops">Oops!</span>
      <Header rank={HeaderRanks.FIRST}>Looks like you're lost</Header>
    </div>
  );
};

export default PageNotFound;
