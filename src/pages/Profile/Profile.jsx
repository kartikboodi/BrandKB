import Layout from "../../components/Layout";
import ProfileSummary from "./components/ProfileSummary/ProfileSummary";

import "./Profile.css";

const Profile = () => {
  return (
    <Layout>
      <ProfileSummary delay={30} />
    </Layout>
  );
};

export default Profile;
