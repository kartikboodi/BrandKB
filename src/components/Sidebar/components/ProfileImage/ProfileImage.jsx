import { Image } from "react-bootstrap";
import profileImage from "../../../../data/kb2.gif";

import "./ProfileImage.css";

const ProfileImage = () => {
  return (
    <div className="ProfileImageContainer">
      <Image className="ProfileImage" src={profileImage} thumbnail />
    </div>
  );
};

export default ProfileImage;
