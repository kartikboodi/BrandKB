import profileImage from "../../../../data/kb2.gif";

import "./ProfileImage.css";

const ProfileImage = () => {
  return (
    <div className="ProfileImageContainer">
      <img className="ProfileImage" src={profileImage} alt="profile" />
    </div>
  );
};

export default ProfileImage;
