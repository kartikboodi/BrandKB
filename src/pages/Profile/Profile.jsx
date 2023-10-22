import Layout from "../../components/Layout";
import profileImage from "../../data/kb2.gif";

import "./Profile.css";

const Profile = () => {
  return (
    <div className="ProfilePage">
      <Layout>
        <div className="ProfileImageContainer">
          <img className="ProfileImage" src={profileImage} alt="profile" />
        </div>
      </Layout>
    </div>
  );
};

export default Profile;
