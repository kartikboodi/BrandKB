import Header from "../../../../components/Header/Header";
import { HeaderRanks } from "../../../../components/Header/HeaderConstants";
import Typography from "../../../../components/Typography";
import { profileSummary } from "../../../../data/Constants";

import "./ProfileSummary.css";

const ProfileSummary = () => {
  return (
    <div className="ProfileSummary">
      <Header rank={HeaderRanks.SECOND}>Profile Summary</Header>
      <Typography>{profileSummary}</Typography>
    </div>
  );
};

export default ProfileSummary;
