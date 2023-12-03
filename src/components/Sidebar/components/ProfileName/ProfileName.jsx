import Header from "../../../../components/Header/Header";
import { HeaderRanks } from "../../../../components/Header/HeaderConstants";
import SubHeader from "../../../../components/SubHeader";
import { NAME } from "../../../../data/content";

import "./ProfileName.css";

const ProfileName = () => {
  return (
    <div className="ProfileNameContainer">
      <Header rank={HeaderRanks.SECOND}>{NAME}</Header>
      <SubHeader>Software Development Engineer</SubHeader>
    </div>
  );
};

export default ProfileName;
